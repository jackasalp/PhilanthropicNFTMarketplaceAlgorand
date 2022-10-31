import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';

import { Server } from 'socket.io';

import { loadStdlib } from '@reach-sh/stdlib';
import timeout from 'connect-timeout';

import { Application } from 'express';
import { createConnection, getRepository } from 'typeorm';

import {
  AuctionService,
  AuthService,
  BuyNowService,
  CategoryService,
  ListingService,
  MessengerService,
  NftService,
  UserService,
  WalletService,
} from '@/services';

import {
  AuctionController,
  AuthController,
  BuyNowController,
  CategoryController,
  UserController,
} from '@/controllers';

import { Config } from '@/config';
import {
  Auction,
  Bid,
  BuyNow,
  Category,
  Listing,
  Metadata,
  NFT,
  NFTMetadata,
  NFTToken,
  User,
  Wallet,
} from '@/models';

import ApiRouter from '../routes';

import { ListingController } from '@/controllers/listing-controller';
import { AuthMiddleware } from '@/middlewares/auth-verify';
import { DenyGuestsMiddleware } from '@/middlewares/deny-guest';
import { ReportValidationErrorsMiddleware } from '@/middlewares/report-validation';
import { SeedingService } from '@/services/seeding-service';
import algosdk from 'algosdk';

export class Bootstrapper {
  app: Application;
  server: http.Server;
  config: Config;
  constructor(app: Application, config: Config) {
    this.app = app;
    this.config = config;
  }

  async connectDB() {
    process.stdout.write('[*] Connecting to DB...\r');
    // await mongoose.connect(this.config.databaseDSL);

    const connection = await createConnection(this.config.dbConfig);

    process.stdout.write('[DONE] seeding data\n');

    await new SeedingService(this.config).seed(connection);

    process.stdout.write('[DONE] Database connected\n');
  }

  async initializeApp() {
    const stdlib = loadStdlib({
      REACH_CONNECTOR_MODE: 'ALGO',
      REACH_DEBUG: 'YES',
    });
    const { network } = this.config;
    stdlib.setWalletFallback(
      stdlib.walletFallback({
        providerEnv: network,
      }),
    );

    // route guards
    const authMiddleware = new AuthMiddleware(this.config);
    const denyGuestsMiddleware = new DenyGuestsMiddleware(this.config);
    const reportValidationErrorsMiddleware = new ReportValidationErrorsMiddleware();

    this.server = http.createServer(this.app);
    const io = new Server(this.server, { cors: { origin: '*' } });

    // Repositories
    process.stdout.write('[*] initializing repositories..\r');

    const auctionRepository = getRepository(Auction);
    const buyNowRepository = getRepository(BuyNow);
    const metadataRepository = getRepository(Metadata);
    const userRepository = getRepository(User);
    const nftMetadataRepository = getRepository(NFTMetadata);
    const nftTokenRepository = getRepository(NFTToken);
    const nftRepository = getRepository(NFT);
    const listingRepository = getRepository(Listing);
    const walletRepository = getRepository(Wallet);
    const categoryRepository = getRepository(Category);
    const bidsRepository = getRepository(Bid);

    const algorandIndexer = new algosdk.Indexer(
      this.config.algodToken,
      this.config.baseIndexer,
      '',
    );

    // Services
    process.stdout.write('[*] initializing services..\r');

    const messengerService = new MessengerService(io);

    const nftService = new NftService(
      stdlib,
      this.config,
      nftRepository,
      nftMetadataRepository,
      nftTokenRepository,
    );

    const walletService = new WalletService(stdlib, this.config, walletRepository);

    const userService = new UserService(stdlib, this.config, userRepository, walletRepository);

    const listingService = new ListingService(stdlib, this.config, listingRepository, userService);

    const auctionService = new AuctionService(
      stdlib,
      this.config,
      auctionRepository,
      bidsRepository,
      messengerService,
      listingService,
      nftService,
      userService,
      algorandIndexer,
    );
    const buyNowService = new BuyNowService(
      stdlib,
      this.config,
      buyNowRepository,
      messengerService,
      listingService,
      nftService,
      algorandIndexer,
    );
    const authService = new AuthService(stdlib, this.config, userService, walletService);

    const categoryService = new CategoryService(stdlib, this.config, categoryRepository);

    // Controllers
    process.stdout.write('[*] initializing controllers..\r');

    const auctionController = new AuctionController(this.config, auctionService);

    const buyNowController = new BuyNowController(this.config, buyNowService);

    const userController = new UserController(this.config, userService);

    const authController = new AuthController(this.config, authService);

    const listingController = new ListingController(this.config, listingService, userService);

    const categoryController = new CategoryController(this.config, categoryService);

    // Routes
    process.stdout.write('[*] Bootstrapping routes..\r');

    const apiRouter = ApiRouter(
      this.config,
      {
        authController,
        auctionController,
        buyNowController,
        listingController,
        userController,
        categoryController,
      },
      {},
      { authMiddleware, denyGuestsMiddleware, reportValidationErrorsMiddleware },
    );

    this.app.use((req, res, next) => {
      console.log(req.path);
      next();
    });
    // this.app.use("/api", apiRouter);
    this.app.use('/', apiRouter);

    // health check endpoint
    this.app.get('/health', async (req, res) => {
      const reachVersion = this.config.reachVersion;

      const provider = await stdlib.getProvider();
      if (provider.algodClient) {
        try {
          await provider.algodClient.healthCheck().do();
        } catch (error) {
          return res.status(500).send(error);
        }
      }

      return res.status(200).json({
        reachVersion,
      });
    });

    this.app.use((req, res, next) => {
      // console.log('==> error ==>', error);
      return res.status(404).send({
        reason: 'Not found',
      });
    });
  }

  async bootstrapMiddlewares() {
    process.stdout.write('[*] Bootstrapping middlewares...\r');
    const haltOnTimedout = (req, res, next) => {
      if (!req.timedout) next();
    };

    this.app.use(cors());

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.use(timeout(90000));
    this.app.use(haltOnTimedout);

    this.app.use(bodyParser.json());
    process.stdout.write('[DONE] bootstrapped middlewares \n');
  }

  async listen(callback) {
    return this.server.listen(this.config.port, () => callback(this.config.port));
  }

  // bootstrap is the entry point (calls the other methods internally)
  async bootstrap() {
    await this.connectDB();
    await this.bootstrapMiddlewares();
    await this.initializeApp();
    console.log('[DONE] App is ready for listening...');
  }
}
