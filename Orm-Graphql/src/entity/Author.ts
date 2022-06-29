import { Field, ObjectType } from 'type-graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
  JoinColumn,
} from 'typeorm';
import { Photo } from './Photo';

@ObjectType()
@Entity()
export class Author extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field(() => [Photo])
  @OneToMany(() => Photo, (photo) => photo.author) // note: we will create author property in the Photo class below
  @JoinColumn()
  photos: Photo[];
}
