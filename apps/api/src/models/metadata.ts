import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('metadatas')
export class Metadata {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  accountIndex!: number;

  @CreateDateColumn()
  createdAt!: Date;
}
