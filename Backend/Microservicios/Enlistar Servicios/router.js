const express = require('express');
const router = express.Router();
const services_list = require('./controllers/read_servicios');

const logResponseBody = require('./middleware/logs');

router.use(express.json());
router.use(logResponseBody);

router.get('/lista-servicios', services_list.enlistar_servicios);

module.exports = router