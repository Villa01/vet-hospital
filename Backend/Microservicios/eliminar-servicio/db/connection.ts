import { Sequelize } from 'sequelize';
import * as env from '../env';

const config = {
    host: env.DB_HOST ?? 'localhost',
    username: env.DB_USER ?? 'admin',
    password: env.DB_PASS ?? '',
    database: env.DB_DATABASE ?? 'default'
    // logging: false,
}

const db = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql'
});

export default db;
