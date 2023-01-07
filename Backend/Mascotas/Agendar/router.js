const express = require('express');
const router = express.Router();
const petsController = require('./controllers/pets');

const logResponseBody = require('./middleware/logs');

router.use(express.json());
router.use(logResponseBody);

// Registrar mascota en cita
router.post('/registrar/cita/mascota', petsController.agendarCita);

module.exports = router;