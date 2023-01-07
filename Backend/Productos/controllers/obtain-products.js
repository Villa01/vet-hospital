const {Producto} = require('../models/index')

exports.obtener_producto = async function (req, res) {
    const results = await Producto.findAll({});
    res.status(200).json(results);
}