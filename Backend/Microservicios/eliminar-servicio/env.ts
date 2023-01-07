import dotenv from 'dotenv';
dotenv.config({ path: __dirname+'/.env' });


export const DB_HOST=process.env.DB_HOST
export const DB_USER=process.env.DB_USER
export const DB_PASS=process.env.DB_PASS
export const DB_DATABASE=process.env.DB_DATABASE
export const JWT_SECRET=process.env.JWT_SECRET
export const E_USER=process.env.E_USER
export const E_PASS=process.env.E_PASS