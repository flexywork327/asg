import 'reflect-metadata';
import { DataSource } from 'typeorm';
import AppConfig from '../config';

const AppDataSources = new DataSource({
  type: 'postgres',
  host: AppConfig.db.host,
  port: Number(AppConfig.db.port),
  username: AppConfig.db.user,
  password: AppConfig.db.password,
  database: AppConfig.db.database,
  entities: [
    __dirname + '/../models/**/*.ts',
    __dirname + '/../models/**/*.js',
  ],
  migrations: [],
  synchronize: true,
  logging: false,
});

module.exports = AppDataSources;
