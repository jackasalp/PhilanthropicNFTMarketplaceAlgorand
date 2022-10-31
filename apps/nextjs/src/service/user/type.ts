import { Listing } from '$service/listings/types';
import { NFT } from '$service/nft/type';
import { Wallet } from '$service/wallet/type';

export interface User {
  address: string;
  username: string;
  bio: string;
  createdAt: Date;
  isGuest?: boolean;
  nfts: NFT[];
  listings: Listing[];
  wallet: Wallet;
  id: string;
}
