import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Bid, NFT } from ".";

export interface IAuction {
  id: number,
  buyType: string,
  creator: string,
  owner: string,
  contractAddress: string;
  platformAddress: string;
  charityAddress: string;
  charityPercentage: string;
  highestBidder: string;
  currentPrice: string;
  reservedPrice: string;
  royalty: string;
  endTime: Date;
  bids: Bid[];
  nft: NFT;
}



@Entity("auctions")
export class Auction {
  @PrimaryColumn()
  id!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  buyType: string;
  
  @Column()
  creator: string;
  
  @Column()
  owner: string;
  
  @Column()
  contractAddress: string;
  
  @Column()
  platformAddress: string;
  
  @Column({ nullable: true })
  charityAddress: string;
  
  @Column({ nullable: true })
  charityPercentage: string;

  @Column()
  highestBidder: string;
  
  // @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, nullable: true })
  @Column({ nullable: true })
  currentPrice: string;
  
  // @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, nullable: true})
  @Column({ nullable: true })
  reservedPrice: string;
  
  // @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, nullable: true })
  @Column({ nullable: true })
  royalty: string;

  
  @Column()
  endTime: Date;
  
  @OneToMany((_type) => Bid, (bid: Bid) => bid.auction)
  bids!: Bid[];
  
  @ManyToOne(() => NFT)
  @JoinColumn()
  nft: NFT;

}
