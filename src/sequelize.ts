import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';

require('dotenv').config();

const c = config.dev;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": process.env.POSTGRES_USERNAME,
  "password": process.env.POSTGRES_PASSWORD,
  "database": process.env.POSTGRES_DATABASE,
  "host":     process.env.POSTGRES_HOST,

  dialect: 'postgres',
  storage: ':memory:',
});

