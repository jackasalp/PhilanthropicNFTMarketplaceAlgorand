import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { NFT } from ".";

export interface IBuyNow {
  buyType: string,
  creator: string,
  seller: string,
  salesPrice: string;
  royaltyPercentage: string;
  contractAddress: string;
  platformAddress: string;
  platformPercentage: string;
  buyerAddress: string;
  charityAddress: string;
  charityPercentage: string;
  nft: NFT;
  id: number;
}


@Entity("buynows")
export class BuyNow {
  @PrimaryColumn()
  id!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  buyType: string;

  @Column()
  creator: string;

  @Column()
  seller: string;

  // @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, nullable: true })
  @Column({ nullable: true })
  salesPrice: string;

  @Column()
  contractAddress: string;

  @Column()
  platformAddress: string;

  @Column({ nullable: true })
  platformPercentage: string;

  @Column({ nullable: true })
  buyerAddress: string;

  @Column({ nullable: true })
  charityAddress: string;

  @Column({ nullable: true })
  charityPercentage: string;

  // @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, nullable: true })
  @Column({ nullable: true })
  royaltyPercentage: string;

  @ManyToOne(() => NFT)
  @JoinColumn()
  nft: NFT;
}
