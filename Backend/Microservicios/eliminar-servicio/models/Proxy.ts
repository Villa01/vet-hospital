import { token_auth } from '../helpers/jwt';
import { RequestHandler } from '../interfaces/RequestHandler';
import { ServiceHandler } from '../controllers/ServiceHandler';
import { Request, Response } from 'express';
import { Log } from './Log';

export class Proxy implements RequestHandler {

    private errorCodes = [...Array(599 - 400 + 1).keys()].map(x => x + 400);
    private serviceHandler: ServiceHandler;

    constructor(serviceHandler: ServiceHandler) {
        this.serviceHandler = serviceHandler;
    }

    public request(request: Request, response: Response): void {
        const token = request.body.token || request.headers["x-access-token"] || '';
    
        this.checkAccess(token)
            .then(canAccess => {
                if (!canAccess) {
                    response.status(401).json({
                        "msg": "Ruta protegida, no autorizado."
                    })
                }
                this.serviceHandler.request(request, response);

            })
            .catch(reason => {
                response.status(500).json({
                    msg: "No se pudo procesar el token. ",
                    reason
                })
            })
            .finally(() => {

                // this.logAccess(request, response);
            })
    }

    private async checkAccess(token: string): Promise<boolean> {

        if(!token)
            return true
        try {
            await token_auth(token);
            return true;
        } catch (err) {

            return false;
        }
    }

    private logAccess(request: Request, response: Response): void {

        const newLog = Log.build({
            Entrada: request.body,
            FechaHora: new Date(),
            Metodo: request.method,
            EsError: this.errorCodes.includes(response.statusCode) ? 0 : 1,
            Salida: {}
        })
        try {
            newLog.save();
        } catch (err) {
            response.status(500).json({
                err
            })
        }
    }
}