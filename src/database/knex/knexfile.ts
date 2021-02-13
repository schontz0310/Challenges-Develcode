import { Config } from 'knex';

const KnexConfig = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'ChallengeDevelcode',
      user: 'postgres',
      password: 'roberta0310',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: 'migrations',
    },
    seeds: {
      directory: 'seeds',
    },
  } as Config,

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  } as Config,
};

export default KnexConfig;