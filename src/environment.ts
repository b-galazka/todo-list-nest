import * as dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

export const environment = {
  allowedDomains: process.env.ALLOWED_DOMAINS?.split(' ') || [],
  databaseHost: process.env.DB_HOST || '127.0.0.1',
  databaseName: process.env.DB_NAME || 'todo_list',
  databaseUser: process.env.DB_USER || 'root',
  databasePassword: process.env.DB_PASS ?? '',
  port: +(process.env.PORT ?? 3000),
  ip: process.env.IP || '127.0.0.1'
};
