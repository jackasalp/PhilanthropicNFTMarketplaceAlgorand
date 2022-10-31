import { formatURL } from '$service/utils/formatURL';
import { keyBy, compact } from 'lodash-es';
import { getAlgodIndexerClient } from '$service/utils/getAlgodIndexerClient';

export interface Arc69Attribute {
  trait_type: string;
  value: string;
}
interface TransactionSearchResponse {
  ['current-round']: number;
  ['next-token']: number;
  transactions: Record<string, any>[];
}

export interface Arc69Metadata {
  description: string;
  external_url: string;
  media_url: string;
  attributes?: Arc69Attribute[];
  standard: 'arc69';
}

type AssetDetail = Arc69Metadata & { params: Record<string, any>; assetId: number };

type GetAssetsTransactionsConfig = Record<number, AssetDetail> | null;

export const getAssetsTransactionsConfig = async (
  assetsId: number[],
): Promise<GetAssetsTransactionsConfig> => {
  const algodIndexerClient = await getAlgodIndexerClient();

  const parsedNotesPromises = assetsId.map(async (assetId: number): Promise<AssetDetail | null> => {
    const transactionsResponse: TransactionSearchResponse = (await algodIndexerClient
      .searchForTransactions()
      .assetID(assetId)
      .limit(10)
      .txType('acfg')
      .do()) as any;

    const selectedTransaction = transactionsResponse.transactions[0];

    if (!selectedTransaction.note) {
      return null;
    }

    const noteString = atob(selectedTransaction.note)
      .trim()
      .replace(/[^ -~]+/g, '');

    const parsedNote = JSON.parse(noteString);

    if (parsedNote?.standard !== 'arc69') {
      return null;
    }

    parsedNote.media_url = await formatURL(parsedNote.media_url);
    parsedNote.assetId = assetId;
    parsedNote.params = transactionsResponse.transactions[0]['asset-config-transaction'].params;
    return parsedNote;
  });

  const parsedNotes = await Promise.all(parsedNotesPromises);

  // return {
  //   nextToken: transactionsResponse.nextToken ?? undefined,
  //   notes: keyBy(compact(parsedNotes), 'assetId'),
  // };
  return keyBy(compact(parsedNotes), 'assetId');
};
