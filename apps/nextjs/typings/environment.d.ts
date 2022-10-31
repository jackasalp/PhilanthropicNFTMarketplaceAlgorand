export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_ROOT_URL: string;
      API_ALGO_EXPLORER_INDEXER: string;
      IPFS_GATEWAY: string;
      API_ALGO_EXPLORER_NODE: string;
      WEB3_STORAGE_API_TOKEN: string;
      API_ALGO_EXPLORER: string;
      ALGO_NETWORK: string;
      NEXT_PUBLIC_CHARITY_ADDRESS: string;
      NEXT_PUBLIC_CHARITY_PERCENTAGE: string;
      PLATFORM_PERCENTAGE: string;
    }
  }
}
