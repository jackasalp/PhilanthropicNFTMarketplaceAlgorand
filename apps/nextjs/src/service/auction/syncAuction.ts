import { axiosFetch } from '$service/utils/axiosFetch';

type SyncAuction = (appId: number | string) => Promise<void | null>;

export const syncAuction: SyncAuction = async (appId) => {
  const url = `/auctions/${appId}/sync`;
  return axiosFetch<void>({ method: 'post', url, timeout: 50000 });
};
