import { axiosFetch } from '$service/utils/axiosFetch';

type SyncBuyNow = (appId: number | string) => Promise<void | null>;

export const syncBuyNow: SyncBuyNow = async (appId) => {
  const url = `/buy-now/${appId}/sync`;
  return axiosFetch<void>({ method: 'post', url, timeout: 50000 });
};
