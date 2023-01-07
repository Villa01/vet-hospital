const connection = require('../database/db');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const pdf_document = require('pdfkit');
const client_aws = require('../controllers/aws-client');

require("dotenv").config();

function enviar_link(id_pago, email) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.E_USER,
            pass: process.env.E_PASS
        }
    });

    /*transporter.verify((error, success) => {
        if (error) {
            console.log(error);
            res.status(401).json({ error_message: error });
        }
    })*/

    //generacion de token de expiracion para link
    jwt.sign(
        {
            user: id_pago
        },
        process.env.JWT_SECRET, {
        expiresIn: '240s'
    },
        (err, jwt_expiring_time) => {
            if (err) {
                console.log(err);
                res.status(401).json({ error_message: "error" });
            } else {
                const url = "http://localhost:3000/";

                transporter.sendMail({
                    from: process.env.E_USER,
                    to: email,
                    subject: "Formulario de cobro",
                    html: `<p>Link formulario de cobro expira en 4 minutos.</p><p>${url + "pagos/" + id_pago}</p>`,
                });

                /*return res.status(200).json({
                    message: "link enviado exitosamente"
                })*/
            }

        }
    );
}

//retornar usuarios frecuentes
function retornar_usuario_frecuente(query, params) {
    return new Promise((resolve, reject) => {
        connection.query(query, [params], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    })
}

//retornar usuarios frecuentes
function retornar_usuario_frecuente(query, params) {
    return new Promise((resolve, reject) => {
        connection.query(query, [params], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    })
}

//registrar orden de pago
function registrar_pago_bdd(query, param1, param2, param3, param4, param5) {
    return new Promise((resolve, reject) => {
        connection.query(query, [param1, param2, param3, param4, param5], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    })
}


exports.generar_orden_pago = async function (req, res) {
    const id_cita = req.body[0].id_cita;
    const tipo_pago = req.body[0].tipo_pago;
    const motivo = req.body[0].motivo;
    const numero_tarjeta = req.body[0].numero_tarjeta;
    const fecha_vencimiento = req.body[0].fecha_vencimiento;
    const cod_seguridad = req.body[0].cod_seguridad;
    const nombre_propietario = req.body[0].nombre_propietario;

    const query_pago = "CALL `HospitalGatifu`.`crearPago`(?, ?, ?, ?, ?);"

    var descripcion_tipo_pago;
    if (tipo_pago == 0) {
        descripcion_tipo_pago = "cita"
    } else {
        descripcion_tipo_pago = "emergencia"
    }

    if (numero_tarjeta.toString().length != 16) {
        return res.status(401).json({
            message: "numero de tarjeta invalido"
        });
    }

    if (parseInt(fecha_vencimiento) < 2022) {
        return res.status(401).json({
            message: "fecha de vencimiento de tarjeta invalida"
        });
    }

    if (cod_seguridad.toString().length != 3) {
        return res.status(401).json({
            message: "codigo de seguridad de tarjeta invalida"
        });
    }

    var file_name = "comprobante" + id_cita + ".pdf"

    doc = new pdf_document();
    doc.text("Comprobante de pago para señor/ra \nNOMBRE: " + nombre_propietario + "\nCon numero de tarjeta: " + numero_tarjeta + "\nPara la " + descripcion_tipo_pago + " con motivo: " + motivo + "\nPAGO CANCELADO");
    doc.end();

    const s3 = new client_aws.aws_service.S3({});
    var params = {
        Body: doc,
        Bucket: "bucket-ayd2-proyecto1",
        Key: file_name,
        ContentType: 'application/pdf'
    }

    s3.upload(params, function (err, data) {
        if (err) {
            return res.status(404).json({
                message: "error al subir archivo"
            });
        }
    })

    const url = "https://bucket-ayd2-proyecto1.s3.us-west-2.amazonaws.com/" + file_name
    await registrar_pago_bdd(query_pago, id_cita, Date.now(), tipo_pago, url, motivo)

    return res.status(200).json({
        message: "pago generado y registrado exitosamente",
        link: url
    });
}

exports.enviar_link_cobro_precio = async function (req, res) {

    const { id_user, email, motivo_cita: motivo = '', id_pago } = req.body[0];

    const query_cliente_frecuente = "CALL HospitalGatifu.clienteFrecuente(?)"

    const motivo_cita = motivo.toUpperCase();

    let resultado_cliente, tarifa;
    try {
        let [res1, res2] = await Promise.all([
            retornar_usuario_frecuente(query_cliente_frecuente, id_user), // Obtener es frucuente
            retornar_usuario_frecuente(`SELECT * FROM HospitalGatifu.Tarifa t WHERE t.Motivo = ? LIMIT 1;`, [motivo_cita]) // Obtener tarifa
        ]);

        resultado_cliente = res1;
        tarifa = res2[0].Precio;
    } catch (err) {
        return res.status(400).json({ msg: JSON.stringify(err) });
    }

    const totalPagar = tarifa;
    const descuento = resultado_cliente[0][0].Frecuente == 0 ? 0 : totalPagar * 0.15;

    enviar_link(id_pago, email);

    // TODO: Actualizar pago en la bdd. 

    return res.status(200).json({
        descuento: descuento,
        total_a_pagar: totalPagar - descuento,
        correo_enviado: email
    })


}

exports.info_pago = async function (req, res) {
    const id_pago = req.params.id;

    await connection.query('CALL `HospitalGatifu`.`obtenerInfoPagoPorId`(?)', [id_pago], (error, results) => {
        if (error) {
            return res.status(404).json({
                message: "error"
            })
        } else {
            return res.status(200).json({
                info: results[0]
            })
        }
    })
}

exports.tarifario = (req, res) => {
    connection.query('CALL HospitalGatifu.obtenerTarifario()', (error, results) => {
        if (error) {
            res.status(400).send({ msj: 'Se producjo un error al obtener el tarifario', error });
        }
        else {
            res.status(200).send({ data: results[0] })
        }
    });
}

exports.updatePrice = (req, res) => {
    const { id, precio } = req.body;

    connection.query('CALL HospitalGatifu.modificarTarifa(?,?)', [id, precio], (error, _) => {
        if (error) {
            res.status(400).send({ msj: 'Se producjo un error al actualizar el precio', error });
        }
        else {
            res.status(200).send({ msj: 'Precio actualizado exitosamente', data: req.body })
        }
    });
}