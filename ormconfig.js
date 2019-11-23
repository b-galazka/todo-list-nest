const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST || '127.0.0.1',
  port: +(process.env.DB_PORT !== undefined ? process.env.DB_PORT : 3306),
  database: process.env.DB_NAME || 'todo_list',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS !== undefined ? process.env.DB_PASS : '',
  entities: ['./**/*.entity.js'],
  migrations: ['migrations/*.ts'],
  cli: {
    migrationsDir: 'migrations'
  }
};
