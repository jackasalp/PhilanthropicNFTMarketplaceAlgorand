import { getAlgodIndexerClient } from '$service/utils/getAlgodIndexerClient';

export const getAccountAssets = async (accountAddress: string): Promise<any[]> => {
  const algodIndexer = getAlgodIndexerClient();
  const accountAssets = await algodIndexer.lookupAccountAssets(accountAddress).do();
  let nfts: any = [];
  nfts = await Promise.all(
    accountAssets.assets
      .filter((asset) => asset.amount > 0)
      .map((asset: any) => algodIndexer.lookupAssetByID(asset['asset-id']).do()),
  );
  return nfts.map((el: any) => el.asset);
};
