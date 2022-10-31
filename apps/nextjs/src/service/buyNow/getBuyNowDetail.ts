import { axiosFetch } from '$service/utils/axiosFetch';
import { BuyNow } from './types';

type GetBuyNowDetail = (buyNowId: string, token?: string) => Promise<BuyNow | null>;

export const getBuyNowDetail: GetBuyNowDetail = async (buyNowId, token) => {
  const url = `/buy-now/${buyNowId}`;
  return axiosFetch<BuyNow>({ method: 'get', url, token });
};
