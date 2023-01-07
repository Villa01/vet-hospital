

const express = require('express');
const cors = require('cors');
const { connect } = require('../database/sequelize');
class Server {

    constructor() {
        
        // Patrón Singleton
        if (typeof Server.instance === "object")
            return Server.instance;

        this.app = express();
        this.port = process.env.PORT ?? 5000;
        this.paths = {
            auth: '/api/micro1',
        }

        // Connect Db
        this.connectDB();

        // Middlewares
        this.middlewares();

        // Routes of the app
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors())

        // Body parsing
        this.app.use(express.json());

    }

    async connectDB() {
        await connect();
    }

    routes() {
        this.app.use(this.paths.auth, require('../routes/servicio'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port', this.port);
        })
    }
}

module.exports = Server;