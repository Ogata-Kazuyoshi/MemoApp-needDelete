/* You may need to fix this file */
require('dotenv').config({ path: './.env.local' });

const DB_USER = process.env.DB_USER;
const DB_NAME = 'notes_app';
const DB_HOST = '127.0.0.1';
const DB_PORT = '5432';
const DB_URL = process.env.DB_URL;
const DB_PASSWORD = process.env.DB_PASSWORD;

module.exports = {
  development: {
    client: 'postgresql',
    connection: DB_URL || {
      host: DB_HOST || '127.0.0.1',
      port: DB_PORT || '5432',
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DB_URL, //databaseサーバーの場合は、URLだけ指定したらOKデータベース名ユーザー名は不要
    migrations: {
      directory: './db/migrations',
    },
    seeds: { directory: './db/seeds' },
  },
};
