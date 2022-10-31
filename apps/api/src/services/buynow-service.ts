import { BuyNow, IBuyNow } from '@/models/buynow';

import { Config } from '@/config';

import * as buyNowContract from '@/contracts/compiled/buynow.main.js';

import { applicationEventTypes, buyTypes } from '@/utils/constants';

import { ListingService, MessengerService, NftService } from '.';
import { NFT } from '@/utils/nft';
import { Repository } from 'typeorm';
import algosdk from 'algosdk';

interface IBuyNowService {
  createBuyNow(appId: number): void;

  getBuyNows(creator: string): void;
  getBuyNow(appId: number): void;

  syncBuyNow(appId: number): void;
  fetchBuyNow(appId: number): Promise<IBuyNow>;
}

export class BuyNowService implements IBuyNowService {
  private readonly config: Config;
  private readonly stdlib: any;

  private readonly algodIndexer: any;

  private readonly messengerService: MessengerService;
  private readonly listingService: ListingService;

  private readonly nftService: NftService;

  private readonly algorandIndexer: any;

  private readonly buyNowRepository: Repository<BuyNow>;

  constructor(
    stdlib: any,
    config: Config,
    buyNowRepository: Repository<BuyNow>,
    messengerService: MessengerService,
    listingService: ListingService,
    nftService: NftService,
    algorandIndexer: algosdk.Indexer,
  ) {
    this.stdlib = stdlib;
    this.buyNowRepository = buyNowRepository;
    this.messengerService = messengerService;
    this.listingService = listingService;
    this.nftService = nftService;
    this.algorandIndexer = algorandIndexer;
    this.config = config;
  }

  async createBuyNow(appId: number) {
    const appData = await this.fetchBuyNow(appId);

    const { metadata, token } = appData.nft;

    const nft = await this.nftService.createFromPayload(metadata, token);

    const buyNowToCreate = await this.buyNowRepository.create(appData);

    buyNowToCreate.nft = nft;

    const buyNowCreated = await this.buyNowRepository.save(buyNowToCreate);

    const buynowPayload = await this.buyNowRepository.findOne({
      where: { id: buyNowCreated.id },
      relations: ['nft', 'nft.metadata', 'nft.token'],
    });

    await this.listingService.createBuyNowListing(appId, buynowPayload);

    await this.messengerService.broadcast(applicationEventTypes.CREATED, buynowPayload);

    return buynowPayload;
  }

  async syncBuyNow(appId: number) {
    const existingBuyNow = await this.buyNowRepository.findOne({ where: { id: appId } });

    if (!existingBuyNow) throw new Error('buynow to update not found');

    if (existingBuyNow.buyType == buyTypes.CLOSED || existingBuyNow.buyType == buyTypes.SOLD)
      return;

    const newBuyNow: IBuyNow = await this.fetchBuyNow(existingBuyNow.id);

    const newBuyNowToUpdate = { ...newBuyNow };
    delete newBuyNowToUpdate.nft;

    await this.buyNowRepository.update(
      {
        id: appId,
      },
      newBuyNowToUpdate,
    );

    await this.messengerService.broadcast(applicationEventTypes.UPDATED, newBuyNow);
  }

  async getBuyNows(creator: string) {
    const common = {
      relations: ['nft', 'nft.metadata', 'nft.token'],
    };
    if (creator)
      return this.buyNowRepository.find({
        where: {
          creator,
        },
        ...common,
      });
    return this.buyNowRepository.find({
      ...common,
    });
  }

  async getBuyNow(appId: number) {
    return this.buyNowRepository.findOne({
      where: { id: appId },
      relations: ['nft', 'nft.metadata', 'nft.token'],
    });
  }

  async fetchBuyNow(appId: number): Promise<IBuyNow> {
    const account = await this.stdlib.createAccount();

    const ctc = account.contract(buyNowContract, Number(appId));

    await this.stdlib.wait(1);

    let attempts = 10;

    for (const field of [ctc.v.Listing.nftId, ctc.v.Listing.royaltyAddress]) {
      while (true) {
        const [noneOrSome, _] = await field();
        if (noneOrSome === 'Some') break;

        --attempts;

        if (attempts <= 0) throw new Error('error syncing the listing');
        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        });
      }
    }

    const platform = await ctc.v.Listing.platformAddress();

    if (this.stdlib.formatAddress(platform[1]) !== this.config.platformAddress)
      throw new Error("the buynow doesn't have a valid platform address");

    const [
      sp,
      token,

      ownerAddr,
      creatorAddr,
      buyerAddr,

      platformAddr,
      platformPercentageAmt,

      charityAddr,
      charityPercentageAmt,

      royaltyAddr,
      royaltyPercentageAmt,

      closed,
      ctcAddr,
    ] = await Promise.all([
      ctc.v.Listing.salesPrice(),
      ctc.v.Listing.nftId(),

      ctc.v.Listing.sellerAddress(),
      ctc.v.Listing.royaltyAddress(),
      ctc.v.Listing.buyerAddress(),

      ctc.v.Listing.platformAddress(),
      ctc.v.Listing.platformPercentage(),

      ctc.v.Listing.charityAddress(),
      ctc.v.Listing.charityPercentage(),

      ctc.v.Listing.royaltyAddress(),
      ctc.v.Listing.royaltyPercentage(),

      ctc.v.Listing.closed(),

      ctc.getContractAddress(),
    ]);

    // const salesPrice =
    //   sp[0] !== "None" ? this.stdlib.formatCurrency(sp[1], 4) : 0;
    const salesPrice = sp[0] !== 'None' ? this.stdlib.formatCurrency(sp[1], 4) : 0;
    const nftId = token[0] !== 'None' ? this.stdlib.bigNumberToNumber(token[1]) : 0;

    const contractAddress = this.stdlib.formatAddress(ctcAddr);
    const royaltyAddress = this.stdlib.formatAddress(creatorAddr[1]);
    const sellerAddress = this.stdlib.formatAddress(ownerAddr[1]);
    const platformAddress = this.stdlib.formatAddress(platformAddr[1]);
    const charityAddress = this.stdlib.formatAddress(charityAddr[1]);
    const buyerAddress = buyerAddr[1] ? this.stdlib.formatAddress(buyerAddr[1]) : '';

    const platformPercentage = Number(platformPercentageAmt[1]).toString();
    const royaltyPercentage = Number(royaltyPercentageAmt[1]).toString();
    const charityPercentage = Number(charityPercentageAmt[1]).toString();

    const isClosed = closed[0] !== 'None' ? closed[1] : false;
    let shouldMarkClosed = false;

    // system should close it (if its sold or closed by seller)
    if (isClosed) {
      const masterAcc = await this.stdlib.newAccountFromMnemonic(this.config.masterMnemonic);

      const ctc = masterAcc.contract(buyNowContract, Number(appId));

      let tryingAttempt = 5;
      while (tryingAttempt > 0) {
        try {
          await ctc.a.System.close(null);
          await buyNowContract.Closer(ctc, {});
          shouldMarkClosed = true;
          break;
        } catch (err) {
          // if (!err.message.includes("Expected the DApp to be in state")) {
          //   isClosed = false;
          //   break;
          // }
          --tryingAttempt;
        }
      }
    }

    if (nftId) {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 sec

      const nft = await NFT.fromAssetId(nftId);

      return {
        buyType: shouldMarkClosed
          ? buyerAddress
            ? buyTypes.SOLD
            : buyTypes.CLOSED
          : buyTypes.BUY_NOW,
        creator: royaltyAddress,
        seller: sellerAddress,
        platformAddress,
        platformPercentage,
        charityAddress,
        charityPercentage,
        royaltyPercentage,
        buyerAddress,
        contractAddress,
        nft: nft as any,
        salesPrice: String(salesPrice),

        id: appId,
      };
    } else {
      throw Error('invalid app id!');
    }
  }
}
