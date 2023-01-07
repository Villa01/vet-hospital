const express = require('express');
const { body } = require('express-validator')

const { getAllBundles, createBundle, deleteBundle } = require('../controllers/paquete');

const validateAtributes = require('../middleware/validate-attributes');

const router = express.Router();

router.get('/', getAllBundles);

router.post('/', [
    body('descripcion', 'Se necesita la descripcion del paquete').notEmpty(),
    body('descuento', 'Se necesita que el descuento sea un decimal menor que 1').isFloat(),
    body('descuento').custom(descuento => {
        if (descuento > 1)
            throw new Error('El descuento no puede ser mayor que 1')
        return true
    }),
    body('listaServicios', 'Se necesita una lista de los ids de los servicios del paquete').isArray(),
    validateAtributes
], createBundle);

router.delete('/:id', deleteBundle);

module.exports = router;