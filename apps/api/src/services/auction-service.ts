import { Auction, IAuction } from '@/models/auction';

import { Config } from '@/config';

import * as auctionContract from '@/contracts/compiled/auction.main.js';

import { NFT } from '@/utils/nft';

import { applicationEventTypes, buyTypes } from '@/utils/constants';

import { Bid } from '@/models';
import { appExists } from '@/utils/algorand';
import algosdk from 'algosdk';
import { IsNull, MoreThan, Not, Repository } from 'typeorm';
import { ListingService, MessengerService, NftService, UserService } from '.';

interface IAuctionService {
  createAuction(
    accountIndex: number,
    creator: string,
    token: number,
    startingBid: number,
    reservedPrice: number,
    duration: number,
    royalty: number,
  ): void;

  syncAuction(appId: number): Promise<boolean>;
  getAuction(appId: number): void;
  getAuctions(creator: string, bidder: string, popular: number): void;

  getBids(contractAddress: string): void;
  fetchAuction(appId: number): Promise<IAuction>;
}

export class AuctionService implements IAuctionService {
  private readonly config: Config;
  private readonly stdlib: any;

  private readonly algorandIndexer: any;

  private readonly messengerService: MessengerService;
  private readonly listingService: ListingService;
  private readonly nftService: NftService;
  private readonly userService: UserService;

  private readonly auctionRepository: Repository<Auction>;
  private readonly bidsRepository: Repository<Bid>;

  constructor(
    stdlib: any,
    config: Config,
    auctionRepository: Repository<Auction>,
    bidsRepository: Repository<Bid>,
    messengerService: MessengerService,
    listingService: ListingService,
    nftService: NftService,
    userService: UserService,
    algorandIndexer: algosdk.Indexer,
  ) {
    this.stdlib = stdlib;
    this.auctionRepository = auctionRepository;
    this.bidsRepository = bidsRepository;
    this.messengerService = messengerService;
    this.listingService = listingService;
    this.nftService = nftService;
    this.algorandIndexer = algorandIndexer;
    this.userService = userService;
    this.config = config;
  }

  async createAuction(appId: number) {
    const appData = await this.fetchAuction(appId);

    const { metadata, token } = appData.nft;
    const nft = await this.nftService.createFromPayload(metadata, token);

    const auctionToCreate = await this.auctionRepository.create(appData);

    auctionToCreate.nft = nft;

    const auctionCreated = await this.auctionRepository.save(auctionToCreate);

    const auctionPayload = await this.auctionRepository.findOne({
      where: { id: auctionCreated.id },
      relations: ['nft', 'nft.metadata', 'nft.token', 'bids'],
    });

    const listing = await this.listingService.createAuctionListing(appId, auctionPayload);

    await this.messengerService.broadcast(applicationEventTypes.CREATED, auctionPayload);

    return auctionCreated;
  }

  async syncAuction(appId: number) {
    const existingAuction = await this.auctionRepository.findOne({ where: { id: appId } });

    if (!existingAuction) throw new Error('auction to update not found');

    // Handle new bid and update auction record
    let newAuction: IAuction;

    let attemptLeft = 5;

    while (true) {
      try {
        newAuction = await this.fetchAuction(existingAuction.id);
        break;
      } catch (error) {
        if (attemptLeft >= 0) {
          --attemptLeft;
          await new Promise((resolve) => setTimeout(resolve, 1000));
        } else {
          throw error;
        }
      }
    }

    newAuction.bids = newAuction.bids.map((bid) => ({
      ...bid,
      auctionId: appId,
    }));
    await this.bidsRepository.save(newAuction.bids);
    const newAuctionToUpdate = { ...newAuction };
    // delete relations parts
    delete newAuctionToUpdate.bids;
    delete newAuctionToUpdate.nft;
    await this.auctionRepository.update(newAuction.id, newAuctionToUpdate);

    await this.messengerService.broadcast(applicationEventTypes.UPDATED, newAuction);
    return true;
  }

  async getAuctions(creator: string, bidder: string, popular: number) {
    const common = {
      relations: ['nft', 'nft.metadata', 'nft.token', 'bids'],
      nft: Not(IsNull()),
    };
    if (creator)
      return await this.auctionRepository.find({
        where: {
          creator,
        },
        ...common,
      });

    // TODO: make this bids.sender
    if (bidder)
      return await this.auctionRepository.find({
        // "bids.sender": bidder,
        ...common,
      });

    if (popular)
      return await this.auctionRepository.find({
        where: {
          buyType: buyTypes.LIVE_AUCTION,
          endTime: MoreThan<Date>(new Date()),
        },
        order: {
          currentPrice: -1,
        },
        take: popular,
        ...common,
      });

    return await this.auctionRepository.find({
      ...common,
    });
  }

  async getAuction(appId: number) {
    const auction = await this.auctionRepository.findOne({
      where: { id: appId },
      relations: ['nft', 'bids'],
    });

    if (!auction) return;

    const nft = await this.nftService.findOne(auction.nft.id);

    return {
      ...auction,
      nft,
    };
  }

  async getBids(contractAddress: string) {
    const { transactions } = await this.algorandIndexer
      .searchForTransactions()
      .address(contractAddress)
      .do();

    return (
      await Promise.all(
        transactions
          .filter(
            (el: any) =>
              el['tx-type'] === 'pay' && el['payment-transaction'].receiver === contractAddress,
          )
          .map(async (el: any) => {
            return {
              txid: el.id,
              time: new Date(el['round-time'] * 1000),
              sender: el?.sender,
              receiver: el['payment-transaction'].receiver,
              amount: this.stdlib.formatCurrency(el['payment-transaction']?.amount, 4),
              username: (await this.userService.getUserByWalletAddress(el?.sender))?.username,
            };
          }),
      )
    ).slice(0, -2);
  }

  async fetchAuction(appId: number): Promise<IAuction> {
    const account = await this.stdlib.createAccount();

    const ctc = account.contract(auctionContract, Number(appId));
    // const platform = await ctc.v.Auction.platformAddress()

    // if (platform[0] == "None") {
    //   throw new Error("platform address not provided")
    // }

    // if (this.stdlib.formatAddress(platform[1]) !== this.config.platformAddress) throw new Error("the auction doesn't have a valid platform address")

    // await this.stdlib.wait(1);
    let attempts = 10;

    for (const field of [
      ctc.v.Auction.nftId,
      ctc.v.Auction.currentPrice,
      ctc.v.Auction.highestBidder,
    ]) {
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

    const [
      cp,
      minBidAmt,
      endSecs,
      token,
      topAddr,
      creatorAddr,
      ownerAddr,
      platformAddr,
      charityAddr,
      charityPercentageAmt,
      royaltyAmt,
      reservePriceAmt,
      closedBySystem,
      ctcAddr,
    ] = await Promise.all([
      ctc.v.Auction.currentPrice(),
      ctc.v.Auction.minBid(),
      ctc.v.Auction.endSecs(),
      ctc.v.Auction.nftId(),
      ctc.v.Auction.highestBidder(),
      ctc.v.Auction.creatorAddress(),
      ctc.v.Auction.owner(),
      ctc.v.Auction.platformAddress(),
      ctc.v.Auction.charityAddress(),
      ctc.v.Auction.charityPercentage(),
      ctc.v.Auction.royalty(),
      ctc.v.Auction.reservePrice(),
      ctc.v.Auction.closedSys(),
      ctc.getContractAddress(),
    ]);

    if (cp[0] === 'None' || royaltyAmt[0] === 'None' || token[0] === 'None') {
      throw new Error('error synching the listing');
    }

    const currentPrice = String(this.stdlib.formatCurrency(cp[1], 4));
    const royalty = Number(royaltyAmt[1]).toString();
    const charityPercentage = Number(charityPercentageAmt[1]).toString();
    const reservedPrice = String(this.stdlib.formatCurrency(reservePriceAmt[1], 4));

    const minBid = minBidAmt[0] !== 'None' ? this.stdlib.formatCurrency(minBidAmt[1], 4) : 0;
    const nftId = this.stdlib.bigNumberToNumber(token[1]);
    const remainSeconds =
      endSecs[0] !== 'None'
        ? this.stdlib.bigNumberToNumber(endSecs[1]) - Math.floor(Date.now() / 1000)
        : 0;

    const isClosed = closedBySystem[0] !== 'None' ? closedBySystem[1] : false;

    const contractAddress = this.stdlib.formatAddress(ctcAddr);
    const highestBidder = this.stdlib.formatAddress(topAddr[1]);
    const creatorAddress = this.stdlib.formatAddress(creatorAddr[1]);
    const ownerAddress = this.stdlib.formatAddress(ownerAddr[1]);
    const platformAddress = this.stdlib.formatAddress(platformAddr[1]);
    const charityAddress = this.stdlib.formatAddress(charityAddr[1]);

    if (nftId) {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 sec

      const bids = await this.getBids(contractAddress);
      const nft = await NFT.fromAssetId(nftId);

      let endTime = new Date();
      endTime.setSeconds(endTime.getSeconds() + remainSeconds);

      if (!isClosed && remainSeconds <= 0) {
        const masterAcc = await this.stdlib.newAccountFromMnemonic(this.config.masterMnemonic);

        const ctc = masterAcc.contract(auctionContract, Number(appId));

        try {
          await ctc.a.Bidder.touch(null);
          await ctc.a.System.close(null);
        } catch (err) {}
      }

      let exists = await appExists(Number(appId));

      return {
        // buyType: remainSeconds > 0 ? buyTypes.LIVE_AUCTION : buyTypes.CLOSED_AUCTION,
        buyType: exists ? buyTypes.LIVE_AUCTION : buyTypes.CLOSED_AUCTION,
        creator: creatorAddress,
        owner: ownerAddress,
        platformAddress,
        reservedPrice: '0',
        royalty,
        contractAddress,
        highestBidder,
        currentPrice: currentPrice || minBid,
        endTime,
        bids,
        nft: nft as any,

        charityAddress,
        charityPercentage,

        id: appId,
      };
    } else {
      throw Error('invalid app id!');
    }
  }
}
