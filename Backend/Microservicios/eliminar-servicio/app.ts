import dotenv from 'dotenv';
import Server from './models/server';

// Configurar dot.env
dotenv.config({ path: __dirname+'/.env' });
const server = new Server();

server.listen();