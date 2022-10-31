import { Config } from '@/config';
import { NFT as NftModel, NFTMetadata, NFTToken } from '@/models';
import { NFT } from '@/utils/nft';
import axios from 'axios';
import { DeleteResult, Repository } from 'typeorm';

interface INftService {
  getNFT(nftId: number): Promise<NFT>;
  getUserNfts(userId: string): Promise<Array<NFT>>;
}

export class NftService implements INftService {
  private readonly config: Config;
  private readonly stdlib: any;
  private readonly nftRepository: Repository<NftModel>;
  private readonly nftMetadataRepository: Repository<NFTMetadata>;
  private readonly nftTokenRepository: Repository<NFTToken>;

  constructor(
    stdlib: any,
    config: Config,
    nftRepository: Repository<NftModel>,
    nftMetadataRepository: Repository<NFTMetadata>,
    nftTokenRepository: Repository<NFTToken>,
  ) {
    this.stdlib = stdlib;
    this.config = config;
    this.nftRepository = nftRepository;
    this.nftMetadataRepository = nftMetadataRepository;
    this.nftTokenRepository = nftTokenRepository;
  }

  async removeNFT(nftId: number): Promise<DeleteResult> {
    return await this.nftRepository.delete({ id: nftId });
  }

  async getNFT(nftId: number) {
    const nft = NFT.fromAssetId(nftId);

    return nft;
  }

  async getUserNfts(walletAddress: string) {
    try {
      const { data } = await axios.get(`${this.config.explorerApi}/v2/accounts/${walletAddress}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async createFromPayload(metadataData: NFTMetadata, tokenData: NFTToken) {
    if (await this.nftTokenRepository.findOne({ where: { id: tokenData.id } }))
      return await this.nftRepository.findOne({
        where: { id: tokenData.id },
        relations: ['metadata', 'token'],
      });

    const metadata = await this.nftMetadataRepository.create(metadataData);
    const token = await this.nftTokenRepository.create(tokenData);

    await this.nftMetadataRepository.save(metadata);
    await this.nftTokenRepository.save(tokenData);

    const nftId = tokenData.id;

    const nft = new NftModel();

    nft.id = nftId;
    nft.metadata = metadata;
    nft.token = token;

    await this.nftRepository.save(nft);

    return await this.nftRepository.findOne({
      where: { id: nftId },
      relations: ['metadata', 'token'],
    });
  }

  async findOne(nftId: number) {
    return await this.nftRepository.findOne({
      where: { id: nftId },
      relations: ['metadata', 'token'],
    });
  }
}
