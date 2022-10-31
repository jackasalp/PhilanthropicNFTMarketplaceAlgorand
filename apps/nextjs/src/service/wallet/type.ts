import { Listing } from '$service/listings/types';
import { User } from '$service/user/type';

export interface Wallet {
  address: string;
  authNonce?: string;
  createdAt: string;
  user: User;
  listings: Listing[];
}
