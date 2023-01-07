const connection = require("../database/db");

exports.receta_mascota = (req, res) => {
  const id_mascota = req.params.id;

  connection.query('CALL HospitalGatifu.obtenerRecetasPorId(?)', [id_mascota], (error, results) => {
    if (error) {
      return res.status(404).json({
        message: "error"
      });
    } else {
      return res.status(200).json({
        info: results[0]
      });
    }
  })
};