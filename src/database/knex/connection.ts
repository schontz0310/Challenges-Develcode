import knex from 'knex';
import KnexConfig from './knexfile';

const db = knex(KnexConfig.development);

export default db;