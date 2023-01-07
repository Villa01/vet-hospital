const express = require('express');
const connection = require('./database/db');
const router = express.Router();
const medicalController = require('./controllers/medical');
const medicineController = require('./controllers/medicine');

const client_aws = require('./controllers/aws-client');

const logResponseBody = require('./middleware/logs');
const multer = require('multer');

router.use(express.json());
router.use(logResponseBody);

const upload = multer({});


// Obtener disponibilidad de medicos
router.post('/disponibles', medicalController.getDisponibilidadMedico);

// Obtener pacientes del medico
router.get('/pacientes/:id', medicalController.obtenerPacientes);

// Ver Emergencias
router.get('/obtener/emergencias', medicalController.verEmergencias);


// Retornar medicamentos
router.get('/total-medicamentos', medicineController.retornar_medicamentos);

// Crear estudio
router.post('/crear-estudio', upload.single('file'), (req, res) =>{
    const id_mascota = req.body.id_mascota;
    const id_medico = req.body.id_medico;

    //verificar que se haya ingresado un archivo
    if (req.file == undefined) {
        return res.status(404).json({
            info: "archivo de estudio obligatorio"
        });
    }

    const s3 = new client_aws.aws_service.S3({});
    var file_name = `${req.file.originalname}`;

    let upload_f = { Key: file_name, Bucket: 'bucket-ayd2-proyecto1', Body: req.file.buffer };

    s3.upload(upload_f, (err, results) => {
        if (err) {
            return console.log(err);
        }
    });

    var url = "https://bucket-ayd2-proyecto1.s3.us-west-2.amazonaws.com/" + file_name

    connection.query('CALL `HospitalGatifu`.`crearEstudio`(?, ?, ?);', [id_medico, id_mascota, url], (error, results) => {
        if(error){
            return res.status(401).json({
                message: "error"
            });
        }else{
            return res.status(201).json({
                message: "estudio creado con exito",
                url: "https://bucket-ayd2-proyecto1.s3.us-west-2.amazonaws.com/" + file_name
            });
        }

    })


});

// Asignar medicamento
router.post('/asignar-medicamento', medicineController.asignarMedicamento);

module.exports = router;