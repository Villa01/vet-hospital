const express = require('express');
const router = express.Router();
const petsController = require('./controllers/pets');

const logResponseBody = require('./middleware/logs');

router.use(express.json());
router.use(logResponseBody);

// Obtener mascotas por usuario
router.get('/obtener/mascotas/usuario/:id', petsController.getAll);

module.exports = router;