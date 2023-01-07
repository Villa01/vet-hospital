const express = require('express');
const router = express.Router();
const petsController = require('./controllers/pets');

const logResponseBody = require('./middleware/logs');

router.use(express.json());
router.use(logResponseBody);

router.post('/registrar/mascota/usuario', petsController.save);

module.exports = router;