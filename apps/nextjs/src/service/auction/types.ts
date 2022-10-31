import { NFT } from '$service/nft/type';

export interface Bid {
  id: number;
  userId?: string;
  createdAt: Date;
  txid?: string;
  time?: Date;
  sender?: string;
  receiver?: string;
  amount: string;
  auctionId: number;
  auction: Auction;
}

export enum BuyTypes {
  LIVE_AUCTION = 'LIVE_AUCTION',
  CLOSED_AUCTION = 'CLOSED_AUCTION',
  DELETED_AUCTION = 'DELETED_AUCTION',
  BUY_NOW = 'BUY_NOW',
  SOLD = 'SOLD',
}

export interface Auction {
  id: number;
  createdAt: number;
  buyType: BuyTypes;
  creator: string;
  owner: string;
  contractAddress?: string;
  platFormAddress?: string;
  charityAddress?: string | null;
  charityPercentage?: string | null;
  highestBidder?: string; // wallet address
  currentPrice?: string | null;
  reservedPrice?: string | null;
  royalty?: string | null;
  endTime?: Date;
  bids: Bid[];
  nft?: NFT;
}

export interface AuctionParams {
  creatorAddress: string;
  platformAddress: string;
  nftId: string;
  bidIncrement: number;
}
