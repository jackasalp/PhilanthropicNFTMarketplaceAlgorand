import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('tokens')
export class NFTToken {
  @PrimaryColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  unitName: string;

  @Column()
  url: string;

  @Column({ nullable: true })
  metadataHash: string;

  @Column()
  total: number;

  @Column()
  decimals: number;

  @Column()
  creator: string;

  @Column()
  manager: string;

  @Column()
  reserve: string;

  @Column()
  defaultFrozen: boolean;

  @CreateDateColumn()
  createdAt!: Date;
}
