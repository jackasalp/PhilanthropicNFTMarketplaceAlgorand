import { QueryClient } from 'react-query';

const isServer = typeof window === 'undefined';

let reactQueryClient;

const minutes = 60 * 1000;
const createQueryClient = (): QueryClient =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * minutes,
      },
    },
  });

export const getReactQueryClient = (): QueryClient => {
  if (!isServer) {
    if (!reactQueryClient) reactQueryClient = createQueryClient();
    return reactQueryClient;
  }

  return createQueryClient();
};
