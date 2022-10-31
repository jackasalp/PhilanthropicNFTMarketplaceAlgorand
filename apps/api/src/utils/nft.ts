import { Config } from '@/config';
import algosdk from 'algosdk';

import { sha256 } from 'js-sha256';

import { Blob, File } from 'web3.storage';

const config = new Config();

const client = new algosdk.Indexer(config.algodToken, config.baseIndexer, '');

export const ARC3_URL_SUFFIX = '#arc3';
export const METADATA_FILE = 'metadata.json';
export const JSON_TYPE = 'application/json';

export function resolveProtocol(url: string): string {
  if (url.endsWith(ARC3_URL_SUFFIX)) url = url.slice(0, url.length - ARC3_URL_SUFFIX.length);

  const chunks = url.split('://');

  // No protocol specified, give up
  if (chunks.length < 2) return url;

  //Switch on the protocol
  switch (chunks[0]) {
    case 'ipfs': //Its ipfs, use the configured gateway
      return config.ipfsGateway + chunks[1];
    case 'https': //Its already http, just return it
      return url;
    // TODO: Future options may include arweave or algorand
  }

  return url;
}

export const getToken = async (assetId: number) => await client.lookupAssetByID(assetId).do();

export class Token {
  id: number; // Asset Idx

  name: string;
  unitName: string;
  url: string;

  metadataHash: string;

  total: number;
  decimals: number;

  creator: string;

  manager: string;
  reserve: string;
  clawback: string;
  freeze: string;

  defaultFrozen: boolean;

  constructor(t: any) {
    this.id = t.index;

    const p = t.params;

    this.name = p.name;
    this.unitName = p['unit-name'];
    this.url = p.url;

    this.metadataHash = p['metadata-hash'];

    this.total = p.total;
    this.decimals = p.decimals;

    this.creator = p.creator;

    this.manager = p.manager;
    this.reserve = p.reserve;
    this.clawback = p.clawback;
    this.freeze = p.freeze;

    this.defaultFrozen = p['default-frozen'];
  }
}

export class NFT {
  token: Token | undefined;
  metadata: NFTMetadata;

  urlMimeType: string | null | undefined;

  constructor(md: NFTMetadata, token?: Token, urlMimeType?: string | null) {
    this.metadata = md;
    this.token = token;
    this.urlMimeType = urlMimeType;
  }

  static async fromAssetId(assetId: number): Promise<NFT> {
    const token = await getToken(assetId);
    return NFT.fromToken(token?.asset);
  }

  static async fromToken(t: any): Promise<NFT> {
    const token = new Token(t);

    return new NFT(NFTMetadata.fromToken(token), token);
  }

  imgURL(): string {
    // Try to resolve the protocol, if one is set
    const url = resolveProtocol(this.metadata.image);

    // If the url is different, we resolved it correctly
    if (url !== this.metadata.image) return url;

    // It may be a relative url stored within the same directory as the metadata file
    // Lop off the METADATA_FILE bit and append image path
    // @ts-ignore
    if (this.token.url.endsWith(METADATA_FILE)) {
      // @ts-ignore
      const dir = this.token.url.substring(0, this.token.url.length - METADATA_FILE.length);
      return resolveProtocol(dir) + this.metadata.image;
    }

    // give up
    return url;
  }

  async isItOwnedBy(address: string) {
    const assets = (await client.lookupAccountAssets(address).do())?.assets || [];
    return !!assets.find((asset) => asset['asset-id'] === this.token.id);
  }
}

export type Properties = {
  [key: string]: string | number;
};

export class NFTMetadata {
  name: string = '';
  description: string = '';

  image: string = '';
  decimals?: number = 0;
  unitName?: string = '';
  royalty?: number = 2.5;
  image_integrity?: string = '';
  image_mimetype?: string = '';
  properties?: Properties;

  constructor(args: any = {}) {
    Object.assign(this, args);
  }

  static fromToken(t: Token) {
    return new NFTMetadata({ name: t.name, image: t.url, decimals: t.decimals });
  }
}

export class ARC69Metadata {
  standard = '';
  description = '';
  image = '';
  total = 1;
  unitName = '';
  royalty = undefined;
  image_integrity = '';
  image_mimetype = '';
  properties = {};

  constructor(args) {
    Object.assign(this, args);
  }

  toHash() {
    // eslint-disable-next-line no-prototype-builtins
    if (this.hasOwnProperty('extra_metadata')) {
      // TODO
      // am = SHA-512/256("arc0003/am" || SHA-512/256("arc0003/amj" || content of JSON metadata file) || e)
    }

    const hash = sha256.create();
    hash.update(JSON.stringify(this));
    return new Uint8Array(hash.digest());
  }

  toFile() {
    const md_blob = new Blob([JSON.stringify({ ...this }, null, 2)], {
      type: JSON_TYPE,
    });
    return new File([md_blob], METADATA_FILE);
  }

  static fromToken(t) {
    return new ARC69Metadata({
      name: t.name,
      image: t.url,
      decimals: t.decimals,
    });
  }
}
