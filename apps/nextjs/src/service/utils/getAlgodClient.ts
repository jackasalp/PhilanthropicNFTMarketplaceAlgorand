import { Algodv2 } from 'algosdk';

let algodClient: Algodv2;
export const getAlgodClient = (baseServer?: string): Algodv2 => {
  if (!algodClient || baseServer) {
    algodClient = new Algodv2('', baseServer ?? process.env.API_ALGO_EXPLORER_INDEXER, '');
  }

  return algodClient;
};
