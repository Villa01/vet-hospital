const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({path: './env/.env'});

var corsOptions = {
    origin: '*', 
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));
app.use('/', require('./router'));

app.listen(5000, () => {
    console.log('localhost:5000');
});

