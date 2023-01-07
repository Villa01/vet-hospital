const {Producto} = require('../models/index')

exports.registrar_producto = async function (req, res) {
    const descripcion = req.body.descripcion
    const precio = req.body.precio
    const cant_stock = req.body.cant_stock
    
    await Producto.create({
        Descripcion: descripcion,
        Precio: precio,
        CantidadStock: cant_stock
    });

    res.status(200).json({
        message: "Producto registrado con exito"
    });
}