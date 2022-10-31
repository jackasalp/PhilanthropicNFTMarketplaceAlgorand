import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Listing, User } from '.';

@Entity('wallets')
export class Wallet {
  @PrimaryColumn()
  address: string;

  @Column({ nullable: true })
  authNonce?: string;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToOne(() => User, (user) => user.wallet)
  @JoinColumn()
  user: User;

  @OneToMany((_type) => Listing, (listing: Listing) => listing.user)
  listings!: Listing[];
}
