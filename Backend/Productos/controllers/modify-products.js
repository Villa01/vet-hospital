const {Producto} = require('../models/index')

exports.modificar_precio = async function (req, res) {
    const id = req.body.id_producto
    const precio = req.body.precio
    
    const results = await Producto.update({
        Precio: precio
    },
    {where: { idProducto: id }});
    
    res.status(200).json(results);
}