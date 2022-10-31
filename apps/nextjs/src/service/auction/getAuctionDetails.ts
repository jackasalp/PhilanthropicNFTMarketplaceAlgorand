import { axiosFetch } from '$service/utils/axiosFetch';
import { Auction } from './types';

type GetAuctionDetail = (auctionId: string, token?: string) => Promise<Auction | null>;

export const getAuctionDetail: GetAuctionDetail = async (auctionId, token) => {
  const url = `/auctions/${auctionId}`;
  return axiosFetch<Auction>({ method: 'get', url, token });
};
