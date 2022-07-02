import { Author } from './entity/Author';
import { PhotoMetaData } from './entity/PhotoMetaData';
import { Photo } from './entity/Photo';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  password: 'postgres',
  username: 'postgres',
  database: 'postgres',
  host: 'db',
  synchronize: true,
  logging: true,
  entities: ['src/entity/**/*.ts'],
  migrations: [process.cwd() + '/src/migrations/*.ts'],
  subscribers: [],
});
