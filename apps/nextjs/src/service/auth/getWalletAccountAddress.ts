import { isEmpty } from 'lodash-es';
import { getMyAlgo } from '../utils/getMyAlgoWallet';

export const getWalletAccountAddress = async (): Promise<string | null> => {
  const myAlgo = await getMyAlgo();

  const accounts = await myAlgo.connect({
    shouldSelectOneAccount: true,
  });

  return !isEmpty(accounts) ? accounts[0]?.address ?? '' : null;
};
