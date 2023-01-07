const { response, request } = require('express');
const { dbConnection } = require('../database/sequelize');
const initModels = require('../models/init-models');
const { Paquete, Paquete_has_Servicio, Servicio } = initModels(dbConnection);

const getAllBundles = async (req = request, res = response) => {
    const paquetes = await Paquete.findAll({
        where: {
            Eliminado: false
        },
        include: {
            model: Servicio,
            as: 'Servicio_idServicio_Servicios',
            alias: 'servicios',
            through: {
                attributes: []
            }
        }
    });
    const paquetesJSON = JSON.stringify(paquetes);
    const retPaquetes = JSON.parse(paquetesJSON).map(paquete => {
        paquete.servicios = paquete.Servicio_idServicio_Servicios;
        delete paquete.Servicio_idServicio_Servicios;
        return paquete;
    })
    return res.json({ paquetes: retPaquetes })
}

const createBundle = async (req = request, res = response) => {

    const { descripcion, descuento, listaServicios } = req.body;


    const paquete = await Paquete.create({
        Descripcion: descripcion,
        Descuento: descuento
    });

    const servicios = await Servicio.findAll({
        where: {
            idServicio: listaServicios
        }
    })

    const serviciosPaquetes = [];

    servicios.forEach(servicio => {
        serviciosPaquetes.push({
            Paquete_idPaquete: paquete.idPaquete,
            Servicio_idServicio: servicio.idServicio
        })
    });

    await Paquete_has_Servicio.bulkCreate(serviciosPaquetes);

    return res.status(200).json({
        paquete
    })
}

const deleteBundle = async (req = request, res = response) => {

    const { id } = req.params;

    const paquete = await Paquete.findByPk(id);

    paquete.set({
        Eliminado: true
    });

    await paquete.save();

    return res.status(204).json(paquete);
}

module.exports = {
    getAllBundles,
    createBundle,
    deleteBundle
}