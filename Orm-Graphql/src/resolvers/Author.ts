import { Query, Resolver } from 'type-graphql';
import { Author } from '../entity/Author';

@Resolver()
export class AuthorResolver {
  @Query(() => [Author])
  async author(): Promise<Author[]> {
    return Author.find({
      relations: ['photos'],
    });
  }
}
