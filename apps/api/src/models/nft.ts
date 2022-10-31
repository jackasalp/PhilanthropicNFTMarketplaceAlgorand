import { CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { NFTMetadata, NFTToken } from '.';

@Entity('nfts')
export class NFT {
  @PrimaryColumn()
  id!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToOne(() => NFTMetadata)
  @JoinColumn()
  metadata: NFTMetadata;

  @OneToOne(() => NFTToken)
  @JoinColumn()
  token: NFTToken;
}
