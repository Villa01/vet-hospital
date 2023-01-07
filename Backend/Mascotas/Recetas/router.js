const express = require('express');
const router = express.Router();
const petsController = require('./controllers/pets');

const logResponseBody = require('./middleware/logs');

router.use(express.json());
router.use(logResponseBody);

// Retornar receta de mascotas
router.get('/receta-mascota/:id', petsController.receta_mascota);

module.exports = router;