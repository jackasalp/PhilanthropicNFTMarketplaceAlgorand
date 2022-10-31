import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Auction, BuyNow, User, Wallet } from '.';

@Entity('listings')
export class Listing {
  @PrimaryColumn()
  id!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  type: string;

  @OneToOne(() => Auction)
  @JoinColumn()
  auction: Auction;

  @OneToOne(() => BuyNow)
  @JoinColumn()
  buynow: BuyNow;

  @ManyToOne(() => User, (user) => user.listings)
  user: User;

  @ManyToOne(() => Wallet, (wallet) => wallet.listings)
  wallet: Wallet;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  name: string;
}
