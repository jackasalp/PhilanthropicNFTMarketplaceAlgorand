import { axiosFetch } from '$service/utils/axiosFetch';
import { Auction } from './types';

type CreateAuction = (appId: number) => Promise<Auction | null>;

const url = '/auctions';
export const createAuction: CreateAuction = async (appId) =>
  axiosFetch<Auction>({ method: 'post', url, data: { appId } });
