import { BuyTypes } from '$service/auction/types';
import { NFT } from '$service/nft/type';

export interface BuyNow {
  id: number;
  buyType: BuyTypes;
  creator: string;
  seller: string;
  salesPrice: string;
  charityAddress?: string | null;
  charityPercentage?: string | null;
  royaltyPercentage: string | null;
  contractAddress: string;
  platformAddress: string;
  platformPercentage: string;
  buyerAddress: string;
  nft: NFT;
}

export interface BuyNowParams {
  creatorAddress: string;
  platformAddress: string;
  platformPercentage: number;
  royaltyPercentage: number;
  nftId: string;
}
