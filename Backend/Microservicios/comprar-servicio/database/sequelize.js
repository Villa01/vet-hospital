const { Sequelize } = require('sequelize');

const database = process.env.DB_DATABASE;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const host = process.env.DB_HOST;

const dbConnection = new Sequelize(database, user, pass, {
    host,
    dialect: 'mysql',
    logging: false
})

const connect = async () => {
    console.log(`Connected to Database ${database}`)
    await dbConnection.sync({force: false})
}

module.exports = {
    connect,
    dbConnection
}
