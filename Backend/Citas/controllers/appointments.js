const connection = require('../database/db');

exports.getCitasHistorial = (req, res) => {
    const { id } = req.params;

    connection.query('CALL HospitalGatifu.obtenerHistorialCitas(?)', [id], (error, results) => {
        if(error) {
            res.status(400).send({ msj: 'Se produjo un error al obtener el historial de citas de la mascota', error });
        }
        else {
            res.status(200).send({ data: results[0] })
        }
    });
}

exports.getCitasProximas = (req, res) => {
    const { id } = req.params;

    connection.query('CALL HospitalGatifu.obtenerCitasProximasPorIdMascota(?)', [id], (error, results) => {
        if(error) {
            res.status(400).send({ msj: 'Se producjo un error al obtener las proximas citas de la mascota', error });
        }
        else {
            res.status(200).send({ data: results[0] })
        }
    });
}

exports.getAllMeetings = (req, res) => {
    const { id } = req.params;

    connection.query('CALL HospitalGatifu.obtenerTodasLasCitas(?)', [id], (error, results) => {
        if(error) {
            res.status(400).send({ msj: 'Se producjo un error al obtener las citas', error });
        }
        else {
            res.status(200).send({ data: results[0] })
        }
    });
}

exports.ObtenerCitasPagadas = (req, res) => {
    connection.query('CALL `HospitalGatifu`.`obtenerCitasPagadas`();', (error, results) => {
        if(error){
            throw error;
        }else{
            res.send(results[0]);
        }
    })
}

exports.estado_cita = async function (req, res) {
    const id_cita = req.body[0].id_cita;
    const estado_nuevo = req.body[0].estado_nuevo;

    await connection.query('CALL `HospitalGatifu`.`cambiarEstado`(?, ?);', [id_cita, estado_nuevo], (error, results) => {
        if (error) {
            return res.status(404).json({
                message: "error"
            })
        } else {
            return res.status(200).json({
                message: "estado de cita cambiado con exito"
            })
        }
    });
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