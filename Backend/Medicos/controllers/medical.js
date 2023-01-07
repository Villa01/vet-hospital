const connection = require('../database/db');

exports.getDisponibilidadMedico = (req, res) => {
    const { idMedico, fechaInicio, fechaFin } = req.body;

    connection.query('CALL HospitalGatifu.disponibilidadMedico(?,?,?)', [idMedico, fechaInicio, fechaFin], (error, results) => {
        if(error) {
            res.status(400).send({ msj: 'Se producjo un error al obtener la disponibilidad del medico', error });
        }
        else {
            res.status(200).send({ data: results[0] })
        }
    });
}

exports.obtenerPacientes = (req, res) => {
    const { id } = req.params;

    connection.query('CALL HospitalGatifu.obtenerPacientes(?)', [id], (error, results) => {
        if(error) {
            res.status(400).send({ msj: 'Se producjo un error al obtener las pacientes del medico', error });
        }
        else {
            res.status(200).send({ data: results[0] })
        }
    });
}

exports.verEmergencias = (req, res) => {
    connection.query('SELECT * from Emergencia', (error, results) => {
        if(error) {
            res.status(400).send({ msj: 'Se producjo un error al obtener las pacientes del medico', error });
        }
        else {
            res.status(200).send({ data: results })
        }
    })
}

exports.finalizarEmergencia = (req, res) => {
    const { id } = req.params;

    connection.query('UPDATE Emergencias SET EstadoEmergencia_idEstadoEmergencia = 1 WHERE id = ?', [id], (error, _) => {
        if(error) {
            res.status(400).send({ msj: 'Se producjo un error al finalizar la emergencia', error })
        }
        else {
            res.status(200).send({ msg: 'Todo bien' })
        }
    })
}

exports.obtener_cita = (req, res) => {
    const id_medico = req.params.id;

    connection.query('CALL HospitalGatifu.obtenerCitasProximasPorIdMedico(?);', [id_medico], (error, citas_obtenidas) => {
        if(error) {
            res.status(400).json({
                message: "id de medico inexistente"
            });
        }
        else {
            res.status(200).json({
                proximas_citas: citas_obtenidas[0]
            });
        }
    })
}