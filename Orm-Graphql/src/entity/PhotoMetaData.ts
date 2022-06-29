import { Field, ObjectType } from 'type-graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { Photo } from './Photo';

@ObjectType()
@Entity()
export class PhotoMetaData extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('int')
  height: number;

  @Field()
  @Column('int')
  width: number;

  @Field()
  @Column()
  orientation: string;

  @Field()
  @Column()
  compressed: boolean;

  @Field()
  @Column()
  comment: string;

  @Field(() => Photo)
  @OneToOne(() => Photo, (photo) => photo.metadata)
  @JoinColumn()
  photo: Photo;
}
