require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/sequelize');

var corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



// app.use('/', require('./router'));

const init = async () => {
    const app = express();
    const port = process.env.PORT ?? 5000;
    app.set('PORT', port)

    app.use(cors(corsOptions));
    app.use(express.json())
    app.use('/microservicio1', require('./router'));

    try {
        await dbConnection.authenticate();
        console.log('Database online.')
    } catch (err) {
        throw new Error(err);
    }

    app.listen(app.get('PORT'), () => {
        console.log(`Server on port ${app.get('PORT')}`);
    });
}


init();