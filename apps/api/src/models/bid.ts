import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Auction } from '.';

@Entity('bids')
export class Bid {
  @Column({ nullable: true })
  username: string;

  @CreateDateColumn()
  createdAt!: Date;

  @PrimaryColumn()
  txid: string;

  @Column()
  time: Date;

  @Column()
  sender: string;

  @Column()
  receiver: string;

  @Column()
  amount: string;

  @Column()
  auctionId!: number;
  @ManyToOne((_type) => Auction, (auction: Auction) => auction.bids)
  @JoinColumn()
  auction!: Auction;
}
