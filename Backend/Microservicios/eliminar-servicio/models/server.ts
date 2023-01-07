import express, { Application } from 'express';
import service from '../routes/servicio';
import cors from 'cors';

import db from '../db/connection';


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        service: '/api/micro2'
    }

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '5000';

        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {
            
            await db.authenticate();
            console.log('Database online');

        } catch (error: any) {
            throw new Error( error );
        }

    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );
    }


    routes() {
        this.app.use( this.apiPaths.service, service )
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Server on port ' + this.port );
        })
    }

}

export default Server;