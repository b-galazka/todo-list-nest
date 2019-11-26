const ormConfig = require('./ormconfig');

module.exports = {
  ...ormConfig,
  entities: ['./**/*.entity.ts'],
  migrations: ['migrations/*.ts'],
  cli: {
    migrationsDir: 'migrations'
  }
};
