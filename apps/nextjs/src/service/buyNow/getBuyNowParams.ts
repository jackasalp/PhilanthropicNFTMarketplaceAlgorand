import { axiosFetch } from '$service/utils/axiosFetch';
import { BuyNowParams } from './types';

type GetBuyNowParams = (nftId: string) => Promise<BuyNowParams | null>;

export const getBuyNowParams: GetBuyNowParams = async (nftId) => {
  const url = `/buy-now/params?nftId=${nftId}`;
  return axiosFetch<BuyNowParams>({ method: 'get', url });
};
