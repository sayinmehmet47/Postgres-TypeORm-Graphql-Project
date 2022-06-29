import { Author } from './Author';
import { PhotoMetaData } from './PhotoMetaData';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  BaseEntity,
  JoinColumn,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Photo extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({
    length: 100,
  })
  name: string;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column()
  filename: string;

  @Field()
  @Column()
  isPublished: boolean;

  @Field(() => [PhotoMetaData])
  @OneToOne(() => PhotoMetaData, (metadata) => metadata.photo, {
    cascade: true,
  })
  @JoinColumn()
  metadata: PhotoMetaData;

  @Field(() => Author)
  @ManyToOne(() => Author, (author) => author.photos, {
    cascade: true,
  })
  @JoinColumn()
  author: Author;
}
