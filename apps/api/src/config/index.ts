process.env.NODE_ENV = process.env.NODE_ENV ?? 'development';

import {
  Auction,
  Bid,
  BuyNow,
  Category,
  Listing,
  Metadata,
  NFT,
  NFTMetadata,
  NFTToken as Token,
  User,
  Wallet,
} from '@/models';
import { getSharedConfig } from 'nft-marketplace-config';
import { createConfig, numberOrNumberStr } from 'nft-marketplace-config/config';
import { ConnectionOptions } from 'typeorm';
import z from 'zod';

const apiConfig = createConfig(
  z.object({
    POSTGRES_HOST: z.string().default('localhost'),
    POSTGRES_PORT: numberOrNumberStr.default(5432),
    POSTGRES_USER: z.string().default('postgres'),
    POSTGRES_PASSWORD: z.string().optional(),
    POSTGRES_DB: z.string(),
  }),
).get();
const sharedConfig = getSharedConfig();

export class Config {
  get port() {
    return parseInt(process.env.PORT, 10) || 5002;
  }
  get network() {
    return sharedConfig.ALGO_NETWORK;
  }
  get explorerApi() {
    return process.env.ALGO_EXPLORER_API;
  }

  get indexerApi() {
    return process.env.ALGO_INDEXER_API;
  }
  get ipfsGateway() {
    return process.env.IPFS_GATEWAY;
  }
  get algodToken() {
    return { 'X-API-key': process.env.PURESTAKE_KEY };
  }
  get baseServer() {
    return process.env.ALGO_BASE_SERVER;
  }
  get masterMnemonic() {
    return process.env.MASTER_MNEMONIC;
  }
  get baseIndexer() {
    return sharedConfig.ALGO_BASE_INDEXER;
  }

  get dbConfig(): ConnectionOptions {
    return {
      entities: [
        Auction,
        BuyNow,
        Metadata,
        User,
        Bid,
        Listing,
        NFTMetadata,
        NFT,
        Token,
        Wallet,
        Category,
      ],
      type: 'postgres',
      host: apiConfig.POSTGRES_HOST,
      port: apiConfig.POSTGRES_PORT as number,
      username: apiConfig.POSTGRES_USER,
      password: apiConfig.POSTGRES_PASSWORD,
      database: apiConfig.POSTGRES_DB,
      synchronize: true,
      ssl: process.env.SSL_REQUIRED == 'true' ? true : false,
    };
  }

  get reachVersion() {
    const packageJSON = require('@reach-sh/stdlib/package.json');
    return packageJSON.version;
  }

  get timeout() {
    return process.env.TIMEOUT || 120;
  }

  get storageToken() {
    return process.env.STORAGE_TOKEN;
  }

  get jwtToken() {
    return process.env.JWT_TOKEN;
  }

  get platformAddress() {
    return process.env.PLATFORM_ADDRESS;
  }

  get royaltyAddress() {
    return process.env.ROYALTY_ADDRESS;
  }

  get royaltyPercentage() {
    return sharedConfig.ROYALTY_PERCENTAGE;
  }

  get platformPercentage() {
    return sharedConfig.PLATFORM_PERCENTAGE;
  }
}
