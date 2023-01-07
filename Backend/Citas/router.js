const express = require('express');
const router = express.Router();
const appointments = require('./controllers/appointments');

const logResponseBody = require('./middleware/logs');

router.use(express.json());
router.use(logResponseBody);

// Obtener historial de citas de mascotas
router.get('/obtener/historial/citas/mascota/:id', appointments.getCitasHistorial);

// Obtener todas las citas
router.get('/obtener/citas/:id', appointments.getAllMeetings);

// Obtener proximas citas de mascotas
router.get('/obtener/citas/mascota/:id', appointments.getCitasProximas);

// Cambiar estado de una cita
router.post('/cambiar-estado-cita', appointments.estado_cita);

// Obtener proximas citas de medico
router.get('/proxima-cita-medico/:id', appointments.obtener_cita);

router.get('/ObtenerCitasPagadas', appointments.ObtenerCitasPagadas);


module.exports = router;