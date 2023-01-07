const { response, request } = require('express');
const { dbConnection } = require('../database/sequelize');
const initModels = require('../models/init-models');
const { Servicio, Pago, Paquete, Producto } = initModels(dbConnection);


const comprarController = async (req = request, res = response) => {
    // verificar si es paquete o servicio
    const { tipoPago } = req.params;
    const { id } = req.body;
    let precio = 0;

    switch (tipoPago) {
        case 'servicio':

            const servicio = await Servicio.findByPk(id);

            if (!servicio)
                return res.status(404).json({
                    msg: `No se encontró el servicio con id ${id}`
                })
            precio = Number(servicio.Precio);
            break;

        case 'paquete':

            const paquete = await Paquete.findByPk(id, {
                include: {
                    model: Servicio,
                    as: 'Servicio_idServicio_Servicios',
                    through: {
                        attributes: []
                    }
                }
            });

            if(!paquete) {
                return res.status(404).json({
                    msg: 'No se encontró el paquete'
                })
            }

            const values = JSON.parse(JSON.stringify(paquete));

            if(values.Eliminado) {
                return res.status(400).json({
                    msg: 'No se puede comprar un paquete eliminado'
                })
            }

            values.Servicio_idServicio_Servicios.forEach(servicio => {
                precio += Number(servicio.Precio);
            });

            precio *= (1-values.Descuento);

            if (!paquete)
                return res.status(404).json({
                    msg: `No se encontró el paquete con id ${id}`
                })

            break;
        
        case 'producto':
            const producto = await Producto.findByPk(id);

            if (!producto)
                return res.status(404).json({
                    msg: `No se encontró el producto con id ${id}`
                })
            precio = Number(producto.Precio);
            break;
        default:
            return res.status(500).json({
                msg: `El tipo ${tipoPago} no está implementado.`
            })
    }

    // Crear nuevo pago
    const newPago = Pago.build({
        Hora: new Date(),
        EstadoPago_idEstadoPago: 1,
        TotalAPagar: precio
    })

    try {
        const pagoCreated = await newPago.save();
        return res.status(201).json({ pagoCreated });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ err })
    }
}

module.exports = {
    comprarController
}