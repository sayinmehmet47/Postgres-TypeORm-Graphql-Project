import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import { Photo } from '../entity/Photo';

@Resolver(() => Photo)
export class PhotoResolver {
  @Query(() => [Photo])
  async photos(): Promise<Photo[]> {
    return Photo.find({
      relations: ['metadata', 'author'],
    });
  }
}

export class CreatePhotoResolver {
  @Mutation(() => Photo)
  async createPhoto(
    @Arg('name') name: string,
    @Arg('description') description: string,
    @Arg('filename') filename: string,
    @Arg('isPublished') isPublished: boolean
    //author name and id as a argument
  ) {
    const photo = await Photo.create({
      name,
      description,
      filename,
      isPublished,
    }).save();
    return photo;
  }
}

export class UpdatePhotoResolver {
  @Mutation(() => Photo)
  async updatePhoto(
    @Arg('id') id: number,
    @Arg('name') name: string,
    @Arg('description') description: string,
    @Arg('filename') filename: string,
    @Arg('isPublished') isPublished: boolean
  ) {
    const photo = await Photo.findOneBy({ id: id });
    console.log(photo);

    if (!photo) {
      throw new Error('Photo not found');
    }
    await Photo.update(
      { id: id },
      { name, description, filename, isPublished }
    );
    return await Photo.findOneBy({ id: id });
  }
}

export class DeletePhotoResolver {
  @Mutation(() => Boolean)
  async deletePhoto(@Arg('id') id: number) {
    const photo = await Photo.findOneBy({ id: id });

    if (!photo) {
      throw new Error('Photo not found');
    }
    await Photo.remove(photo);
    return true;
  }
}
