const {Servicio} = require('../models/index')

exports.enlistar_servicios = async function (req, res) {
    const servicios = await Servicio.findAll({});
    console.log(servicios)
    res.status(200).json(servicios);
}