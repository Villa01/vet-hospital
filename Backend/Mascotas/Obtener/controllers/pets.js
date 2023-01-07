const connection = require("../database/db");

exports.getAll = (req, res) => {
  const { id } = req.params;

  connection.query(
    "CALL HospitalGatifu.obtenerMascotas(?)",
    [id],
    (error, results) => {
      if (error) {
        return res
          .status(400)
          .send({ msj: "Se producjo un error al obtener mascotas", error });
      } else {
        res.status(200).send({ data: results[0] });
      }
    }
  );
};