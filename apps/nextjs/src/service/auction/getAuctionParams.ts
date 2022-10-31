import { axiosFetch } from '$service/utils/axiosFetch';
import { AuctionParams } from './types';

type GetAuctionParams = (nftId: string) => Promise<AuctionParams | null>;

export const getAuctionParams: GetAuctionParams = async (nftId) => {
  const url = `/auctions/params?nftId=${nftId}`;
  return axiosFetch<AuctionParams>({ method: 'get', url });
};
