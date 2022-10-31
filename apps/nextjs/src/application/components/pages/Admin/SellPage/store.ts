import { Charity } from '$service/getCharities';
import { Listing } from '$service/listings/types';
import { atomWithImmer } from 'jotai/immer';

export type AuctionDurations =
  | 'Five Minute'
  | 'One Hour'
  | 'Six Hour'
  | 'Twelve Hour'
  | 'One Day'
  | 'One Week';

const onHourSec = 60 * 60;

export const auctionDurations: Record<AuctionDurations, number> = {
  'Five Minute': 5 * 60,
  'One Hour': 1 * onHourSec,
  'Six Hour': 6 * onHourSec,
  'Twelve Hour': 12 * onHourSec,
  'One Day': 24 * onHourSec,
  'One Week': 7 * 24 * onHourSec,
};

export interface SellForm {
  type: Listing['type'];
  asset?: Record<string, any>;
  startingBid?: number;
  reservedPrice?: number;
  royaltyPercentage: number | null;
  salePrice?: number;
  charityCampaign?: Charity;
  charityPercentage?: number;
  auctionDuration?: AuctionDurations;
}
export const initialFormData: SellForm = {
  type: 'buynow',
  startingBid: 0,
  salePrice: 0,
  charityPercentage: 0,
  reservedPrice: 0,
  royaltyPercentage: 0,
};
export const sellFormAtom = atomWithImmer<SellForm>(initialFormData);
