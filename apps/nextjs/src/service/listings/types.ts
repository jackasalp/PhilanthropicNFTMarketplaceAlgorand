import { Auction } from '$service/auction/types';
import { BuyNow } from '$service/buyNow/types';
import { User } from '$service/user/type';
import { Wallet } from '$service/wallet/type';

export interface Listing {
  id: number;
  createdAt: Date;
  type: 'auction' | 'buynow';
  image: Maybe<string>;
  name: Maybe<string>;
  auction: Maybe<Auction>;
  buynow: Maybe<BuyNow>;
  user: User;
  wallet: Wallet;
}
