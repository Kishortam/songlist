import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';



// schema for songs

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column({ default: false })
  isFavorite: boolean;
}