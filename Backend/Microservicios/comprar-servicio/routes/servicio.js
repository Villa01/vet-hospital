const express = require('express');
const { body } = require('express-validator')

const { comprarController } = require('../controllers/servicio');

const validateAtributes = require('../middleware/validate-attributes');

const router = express.Router();

router.post('/:tipoPago', [
    body('id', `Se necesita el atributo: id`).isInt(),
    (req, res, next) => {
        const { tipoPago } = req.params;
        const tiposPermitidos = ['servicio', 'paquete','producto'];
        if (!(tipoPago && tiposPermitidos.includes(tipoPago)))
            return res.status(400).json({ msg: `Los tipos de pagos permitidos son: ${tiposPermitidos}, se obtuvo: ${tipoPago}` })
        next();
    },
    validateAtributes,
], comprarController);

module.exports = router;