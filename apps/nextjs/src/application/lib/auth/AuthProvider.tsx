import { createContext, useCallback, useEffect, useState } from 'react';
import { useConnectToWallet } from './useConnectToWallet';
import { useQuery } from 'react-query';
import { me } from '$service/api/queries/me';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export interface User {
  accountAddress: string;
  avatarCid: string | null;
  bio: string | null;
  username: string | null;
}
interface IContext {
  signIn: () => void;
  logOut: () => void;
  user: User | null;
  isLoading: boolean;
  refreshUser: () => Promise<void>;
}

export const AuthContext = createContext<IContext>({
  signIn: () => null,
  logOut: () => null,
  isLoading: false,
  user: null,
  refreshUser: Promise.resolve,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<null | User>(null);
  const { onConnectToWallet, isLoading } = useConnectToWallet();
  const router = useRouter();

  const { refetch } = useQuery('me', me, { enabled: false });

  const logOut = () => {
    Cookies.remove(process.env.TOKEN_COOKIE_NAME!);
    setUser(null);
    router.push('/');
  };

  const storeUser = useCallback(async () => {
    const { data, isError } = await refetch();
    if (isError) {
      Cookies.remove(process.env.TOKEN_COOKIE_NAME!);
      setUser(null);
      return;
    }
    // TODO: We need to get accountAddress from me API.below approach is temporary.
    const token = Cookies.get(process.env.TOKEN_COOKIE_NAME!);
    if (data && token) {
      const { accountAddress } = JSON.parse(token);
      setUser({ ...data, accountAddress });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    storeUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const context = {
    signIn: onConnectToWallet(storeUser),
    user,
    refreshUser: storeUser,
    logOut,
    isLoading,
  };

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};
