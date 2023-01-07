import { RequestHandler } from '../interfaces/RequestHandler';
import { Request, Response } from 'express';
import db from '../db/connection';

import { initModels } from '../models/init-models';
const {Servicio} = initModels(db);

export class ServiceHandler implements RequestHandler {

    request(request: Request, response: Response): void {

        const { idServicio } = request.params;

        const query = {
            where: {
                idServicio: Number(idServicio)
            }
        }
        Servicio.destroy(query)
            .then(resp => {
                if(resp === 0)
                    return response.status(409).json({
                        msg: "No fue posible eliminar el contenido"
                    });
                return response.json({
                    msg: "Eliminado correctamente"
                })
                    

            })
            .catch(resp => {
                response.status(400).json(resp)
            })
    }
}