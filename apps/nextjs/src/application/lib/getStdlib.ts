/* eslint-disable camelcase */
import { loadStdlib } from '@reach-sh/stdlib';
import { Stdlib_User } from '@reach-sh/stdlib/dist/types/interfaces';

export const getStdlib = async (): Promise<
  Stdlib_User<any, any, any, any, any, any, any, any, any, any> | undefined
> => {
  if (typeof window !== undefined) {
    const { ALGO_MyAlgoConnect: MyAlgoConnect } = await import('@reach-sh/stdlib');

    const isDevelopment = process.env.NODE_ENV === 'development';

    const stdlib = loadStdlib({
      REACH_CONNECTOR_MODE: 'ALGO',
      REACH_DEBUG: isDevelopment ? 'YES' : 'NO',
    });

    stdlib.setWalletFallback(
      stdlib.walletFallback({
        providerEnv: process.env.ALGO_NETWORK,
        MyAlgoConnect,
      }),
    );

    return stdlib;
  }
};
