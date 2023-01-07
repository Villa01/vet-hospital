const connection = require('../database/db');

exports.asignarMedicamento = (req, res) => {
    const { idMascota, idMedico, idMedicamento } = req.body;

    connection.query('CALL HospitalGatifu.asignarMedicamento(?,?,?)', [idMascota, idMedico, idMedicamento], (error, results) => {
        if(error) {
            res.status(400).send({ msj: 'Se producjo un error al asignar el medicamento', error });
        }
        else {
            res.status(200).send({ data: req.body })
        }
    });
}

exports.retornar_medicamentos = (req, res) => {

    connection.query('CALL `HospitalGatifu`.`obtenerTodosLosMedicamentos`()', (error, results) => {
        if(error) {
            res.status(400).json({
                message: "error"
            });
        }
        else {
            res.status(200).json({
                info: results[0]
            })
        }
    });
}