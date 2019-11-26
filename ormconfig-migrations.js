const ormConfig = require('./ormconfig');

module.exports = {
  ...ormConfig,
  migrations: ['migrations/*.ts'],
  cli: {
    migrationsDir: 'migrations'
  }
};
