import { Request, Response, Router } from 'express';
import { param } from 'express-validator';

import { ServiceHandler } from '../controllers/ServiceHandler';
import { validateAtributes } from '../middlewares/validate-attributes';
import { Proxy } from '../models/Proxy';


const router = Router();

const proxy = new Proxy(new ServiceHandler());

router.delete('/:idServicio',
    [
        param('idServicio', 'El valor debe ser un numero entero').isInt(),
        validateAtributes
    ],
    (req: Request, res: Response) => {
        proxy.request(req, res)

    });


export default router;