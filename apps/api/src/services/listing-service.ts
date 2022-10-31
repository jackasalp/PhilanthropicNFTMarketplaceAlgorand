import { Config } from '@/config';

import { Auction, BuyNow, Listing, User } from '@/models';
import { Repository } from 'typeorm';
import { UserService } from '.';

interface IListingService {
  createAuctionListing(appId: number, item: Auction);
  createBuyNowListing(appId: number, item: BuyNow);
  getListings(): Promise<Array<Listing>>;
  getUserListings(owner: User, type?: string): Promise<Array<Listing>>;
  getLatestListings(): Promise<Array<Listing>>;
}

export class ListingService implements IListingService {
  private readonly config: Config;
  private readonly stdlib: any;

  private readonly listingRepository: Repository<Listing>;
  private readonly userService: UserService;

  constructor(
    stdlib: any,
    config: Config,
    listingRepository: Repository<Listing>,
    userService: UserService,
  ) {
    this.stdlib = stdlib;
    this.listingRepository = listingRepository;
    this.userService = userService;

    this.config = config;
  }

  async createAuctionListing(appId: number, item: Auction) {
    const {
      owner,
      nft: {
        metadata: { name, image },
      },
    } = item;

    let auctionCreator = await this.userService.getUserByWalletAddress(owner);

    const listing = await this.listingRepository.create({
      id: appId,
      type: 'auction',
      name,
      image,
    });

    listing.auction = item;
    listing.user = auctionCreator;

    return await this.listingRepository.save(listing);
  }

  async createBuyNowListing(appId: number, item: BuyNow) {
    const {
      seller,
      nft: {
        metadata: { name, image },
      },
    } = item;

    let buyNowCreator = await this.userService.getUserByWalletAddress(seller);

    const listing = await this.listingRepository.create({
      id: appId,
      type: 'buynow',
      name,
      image,
    });

    listing.buynow = item;
    listing.user = buyNowCreator;

    return await this.listingRepository.save(listing);
  }

  async getUserListings(user: User, type?: string) {
    const whereCondition = {
      where: [
        ['auction', 'all'].includes(type) ? { type: 'auction', user } : undefined,
        ['buynow', 'all'].includes(type) ? { type: 'buynow', user } : undefined,
        { user: user },
      ].filter((x) => x),
    };
    const filter = {
      order: {
        createdAt: 'DESC',
      },
      relations: ['auction', 'buynow', 'user'],
    };
    if (whereCondition.where.length) {
      filter['where'] = whereCondition.where;
    }

    return await this.listingRepository.find(filter as any);
  }

  async getLatestListings(type: string = 'all') {
    const whereCondition = {
      where: [
        ['action', 'all'].includes(type) ? { type: 'auction' } : undefined,
        ['buynow', 'all'].includes(type) ? { type: 'buynow' } : undefined,
      ].filter((x) => x),
    };

    const filter = {
      order: {
        createdAt: 'DESC',
      },
      relations: ['auction', 'buynow', 'user'],
    };
    if (whereCondition.where.length) {
      filter['where'] = whereCondition.where;
    }

    return await this.listingRepository.find(filter as any);
  }

  async getListings(category?: string) {
    const whereCondition = {
      where: [
        ['action', 'all'].includes('all') ? { type: 'auction' } : undefined,
        ['buynow', 'all'].includes('all') ? { type: 'buynow' } : undefined,
      ].filter((x) => x),
    };

    const filter = {
      order: {
        createdAt: 'DESC',
      },
      relations: ['auction', 'buynow', 'user'],
    };
    if (whereCondition.where.length) {
      filter['where'] = whereCondition.where;
    }

    return await this.listingRepository.find(filter as any);
  }
}
