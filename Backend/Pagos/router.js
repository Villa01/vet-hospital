const express = require('express');
const router = express.Router();
const paymentsController = require('./controllers/payments');

const logResponseBody = require('./middleware/logs');

router.use(express.json());
router.use(logResponseBody);

// Aplicar descuento
router.post('/aplicar-descuento', paymentsController.enviar_link_cobro_precio);

// Generar orden de pago
router.post('/generar-cobro', paymentsController.generar_orden_pago);

// Retornar info de pago
router.get('/pago/:id', paymentsController.info_pago);

// Obtener tarifas
router.get('/obtener/tarifas', paymentsController.tarifario);

// Actualizar tarifas
router.put('/actualizar/tarifas', paymentsController.updatePrice);


module.exports = router;