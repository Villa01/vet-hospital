const {Servicio} = require('../models/index')

var modificar_servicio = function (id_s, descripcion_s, precio_s) {
    this.id_s = id_s;
    this.descripcion_s = descripcion_s;
    this.precio_s = precio_s;

    this.modificar = async function () {
        await Servicio.update(

            {
                Descripcion: descripcion_s,
                Precio: precio_s
            },
            {
                where: { idServicio: id_s }
            }
        );
    };
}

exports.actualizar_servicio = async function (req, res) {
    var id = req.body.id_servicio;
    var descripcion = req.body.descripcion_servicio;
    var precio = req.body.precio_servicio

    var update = new modificar_servicio(id, descripcion, precio);
    console.log(update);
    update.modificar();

    res.status(200).json({
        message: "servicio editado con exito"
    });
}