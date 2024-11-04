import { config as dotenvConfig } from 'dotenv';
import { Operation } from './entities/operations.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
dotenvConfig({ path: '.env' });
console.log(`${process.env.DB_PORT}`);
export const typeOrmConfig: TypeOrmModuleOptions & DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: String(process.env.DB_PASSWORD),
  database: process.env.DB_NAME,
  entities: [Operation],
  migrations: ['dist/src/migrations/*{.ts,.js}'],
  synchronize: false,
};
export const AppDataSource = new DataSource(typeOrmConfig);
