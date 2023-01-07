import jwt from "jsonwebtoken";
import express from "express";
import * as env from '../env';

export const token_auth = (token: string) => {
    return new Promise((resolve, reject) => {

        if (!token) {
            reject("token invalido/inexistente");
        }

        try {
            jwt.verify(token, env.JWT_SECRET ?? '');
        } catch (err) {
            reject("token invalido");
        }
        resolve("token valido");
    })
};

