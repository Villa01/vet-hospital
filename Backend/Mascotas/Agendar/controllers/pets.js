const connection = require("../database/db");

exports.agendarCita = (req, res) => {
    const { horario, idMascota, motivo, idDoctor } = req.body;

    connection.query('CALL HospitalGatifu.crearCita(?,?,?,?,@idPago); SELECT @idPago', [horario, idMascota, motivo, idDoctor], (error, results) => {
        if(error) {
            res.status(400).send({ msj: 'Se producjo un error al agendar cita para la mascotas', error });
        }
        else {
            res.status(200).send({ msj: 'Registro de cita exitosa', data: req.body, idPago: results[1][0]['@idPago'] })
        }
    });
};