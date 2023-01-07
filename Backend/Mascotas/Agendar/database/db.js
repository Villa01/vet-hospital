const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    multipleStatements: true
    /*host: 'ayd2.cjemwlrpy6b5.us-east-1.rds.amazonaws.com',
    user: 'node-app',
    password: '5#ZegQcz#!81',
    database: 'HospitalGatifu',*/
});

connection.connect((error) => {
    if(error){
        console.error(error);
        return
    }
    //console.log('base de datos conectada');
})

module.exports = connection;