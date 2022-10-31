import { createConfig, numberOrNumberStr } from './config'
import z from 'zod'

const testNet = {
  ALGO_BASE_INDEXER: 'https://algoindexer.testnet.algoexplorerapi.io',
  API_ALGO_EXPLORER_INDEXER: `https://testnet-idx.algonode.cloud`,
  API_ALGO_EXPLORER_NODE: `https://node.testnet.algoexplorerapi.io`,
  API_ALGO_EXPLORER: `https://testnet.algoexplorer.io`,
}
const mainNet = {
  ALGO_BASE_INDEXER: 'https://algoindexer.algoexplorerapi.io',
  API_ALGO_EXPLORER_INDEXER: `https://mainnet-idx.algonode.cloud`,
  API_ALGO_EXPLORER_NODE: `https://node.algoexplorerapi.io`,
  API_ALGO_EXPLORER: `https://algoexplorer.io`,
}

export const config = createConfig(
  z.object({
    API_ROOT_URL: z.string().default('http://localhost:5002'),
    ALGO_NETWORK: z
      .enum(['TestNet', 'MainNet'])
      .describe(
        `Which network to use - also determines ${Object.keys(testNet).join(
          ', '
        )}`
      ),
    IPFS_GATEWAY: z.string().default('https://ipfs.io/ipfs/'),
    WEB3_STORAGE_API_TOKEN: z
      .string()
      .describe('Web3 Storage API Token for file uploads'),
    PLATFORM_PERCENTAGE: numberOrNumberStr
      .describe('Platform fee as a percentage, e.g. 20 for 20%')
      .default(20),
    ROYALTY_PERCENTAGE: numberOrNumberStr
      .describe('Royalty fee as a percentage, e.g. 20 for 20%')
      .default(20),
  })
)

export function getSharedConfig() {
  return {
    ...config.get(),
    ...(config.get().ALGO_NETWORK === 'TestNet' ? testNet : mainNet),
  }
}
