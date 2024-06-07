import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Tasks } from './entity/Tasks';

const PostgresAppDataSource = new DataSource({
  type: 'postgres',
  host: 'dpg-cp8fktgl6cac73c48hug-a.oregon-postgres.render.com',
  port: 5432,
  username: 'tarefabd_user',
  password: 'vIqhFy1XIhrBLtiEzuIBJcjBKLVDDKw7',
  database: 'tarefabd',
  synchronize: true,
  logging: true,
  entities: [Tasks],
  migrations: [],
  subscribers: [],
  ssl: true,
});

const SqliteAppDataSource = new DataSource({
  type: 'sqlite',
  database: 'tarefadb.sql',
  synchronize: true,
  logging: true,
  entities: [Tasks],
  migrations: [],
  subscribers: [],
});

export const AppDataSource =
  process.env.ENV === 'PROD' ? PostgresAppDataSource : SqliteAppDataSource;
