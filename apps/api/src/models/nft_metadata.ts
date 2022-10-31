import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nft_metadatas')
export class NFTMetadata {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  decimals: number;

  @Column()
  unitName: string;

  @Column({ type: 'real' })
  royalty: number;

  @Column({ nullable: true })
  imageIntegrity: string;

  @Column({ nullable: true })
  imageMimetype: string;

  @CreateDateColumn()
  createdAt!: Date;
}
