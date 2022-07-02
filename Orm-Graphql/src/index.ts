import express = require('express');
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';
import { ApolloServer, gql } from 'apollo-server-express';
import { AppDataSource } from './data-source';
import {
  CreatePhotoResolver,
  DeletePhotoResolver,
  PhotoResolver,
  UpdatePhotoResolver,
} from './resolvers/Photo';
import { PhotoMetaData } from './entity/PhotoMetaData';
import { AuthorResolver } from './resolvers/Author';
import { Photo } from './entity/Photo';
AppDataSource.initialize()
  .then(async () => {
    const app = express();

    const server = new ApolloServer({
      schema: await buildSchema({
        resolvers: [
          HelloResolver,
          PhotoResolver,
          CreatePhotoResolver,
          UpdatePhotoResolver,
          DeletePhotoResolver,
          AuthorResolver,
        ],
        validate: false,
      }),

      context: ({ req, res }) => ({ req, res }),
    });

    await server.start();
    server.applyMiddleware({ app });

    const photoRepository = AppDataSource.getRepository(Photo);

    // const allPhotos = await photoRepository.find({
    //   relations: ['metadata', 'author'],
    // });
    // console.log(allPhotos);

    console.log('Photo is saved, photo metadata is saved too.');

    app.listen({ port: 4000 }, () =>
      console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
      )
    );
  })

  .catch((error) => console.log(error));
