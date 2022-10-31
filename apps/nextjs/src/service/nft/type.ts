export interface NFTToken {
  id: number;
  name: string;
  description: string;
  image: string;
  decimals: number;
  unitName: string;
  royaltyPercentage: number;
  imageIntegrity: string;
  imageMimetype: string;
  createdAt: Date;
}

export interface NFTMetadata {
  id: number;
  name: string;
  description: string;
  image: string;
  decimals: number;
  unitName: string;
  royaltyPercentage: number;
  imageIntegrity: string;
  imageMimetype: string;
  createdAt: Date;
}

export interface NFT {
  id: number;
  createdAt: Date;
  metadata: NFTMetadata;
  token: NFTToken;
}
