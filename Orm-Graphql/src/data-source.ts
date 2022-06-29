import { Author } from './entity/Author';
import { PhotoMetaData } from './entity/PhotoMetaData';
import { Photo } from './entity/Photo';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  database: 'postgres',
  synchronize: true,
  logging: true,
  password: 'postgres',
  username: 'postgres',
  entities: ['src/entity/**/*.ts'],
  migrations: [process.cwd() + '/src/migrations/*.ts'],
  subscribers: [],
});
