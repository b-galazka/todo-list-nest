import * as dotenv from 'dotenv';

dotenv.config();

export const environment = {
  allowedDomains: process.env.ALLOWED_DOMAINS?.split(' ') || [],
  ip: process.env.IP || '127.0.0.1',
  port: +(process.env.PORT ?? 3000)
};
