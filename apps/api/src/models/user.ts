import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Listing, Wallet } from '.';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @Column({ nullable: true })
  username?: string;

  @Column({ nullable: true })
  avatarCid?: string;

  @Column({ nullable: true })
  bio?: string;

  // @OneToMany((_type) => NFT, (nft: NFT) => nft.user)
  // nfts!: NFT[];

  @OneToMany((_type) => Listing, (listing: Listing) => listing.user)
  listings!: Listing[];

  @OneToOne(() => Wallet, (wallet) => wallet.user)
  wallet: Wallet;
}
