import { axiosFetch } from '$service/utils/axiosFetch';
import { BuyNow } from './types';

type CreateBuyNow = (appId: number) => Promise<BuyNow | null>;

const url = '/buy-now';
export const createBuyNow: CreateBuyNow = async (appId) =>
  axiosFetch<BuyNow>({ method: 'post', url, data: { appId } });
