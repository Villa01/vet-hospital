const express = require('express');
const router = express.Router();
const update_service = require('./controllers/update_servicios');

const logResponseBody = require('./middleware/logs');

router.use(express.json());
router.use(logResponseBody);

router.post('/modificar_servicio', update_service.actualizar_servicio);

module.exports = router