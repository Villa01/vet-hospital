const connection = require("../database/db");
const AWS = require("aws-sdk");

const AWS_PUBLIC_KEY = process.env.AWS_PUBLIC_KEY;
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION;

const s3 = new AWS.S3({
  region: AWS_BUCKET_REGION,
  accessKeyId: AWS_PUBLIC_KEY,
  secretAccessKey: AWS_SECRET_KEY,
});

exports.save = (req, res) => {
  const { raza, tipo, edad, foto, idUsuario } = req.body;

  let [info, file] = foto.split(",");
  let [, type] = info.split("/");
  let [extension] = type.split(";");

  if (extension == "jpeg") extension = "jpg";

  let decodedImage = Buffer.from(file, "base64");
  let now = new Date().getTime();
  let filename = `pet_${now}.${extension}`;
  let folder = "pets/";
  let filepath = `${folder}${filename}`;

  var uploadParamsS3 = {
    Bucket: AWS_BUCKET_NAME,
    Key: filepath,
    Body: decodedImage,
    ACL: "public-read", // ACL -> LE APLICA LA POLITICA AL OBJETO QUE SE ESTA GUARDANDO
  };

  s3.upload(uploadParamsS3, (err, data) => {
    if (err) {
      res
        .status(400)
        .send({ msj: "Se producjo un error al subir la foto", error: err });
    } else {
      let location = data.Location;
      console.log(location);
      req.body["foto"] = location;
      connection.query(
        "CALL HospitalGatifu.registrarMascota(?,?,?,?,?)",
        [raza, tipo, edad, location, idUsuario],
        (error, _) => {
          if (error) {
            res
              .status(400)
              .send({
                msj: "Se producjo un error al guardar la mascotas",
                error,
              });
          } else {
            res
              .status(200)
              .send({ msj: "Registro de mascota exitosa", data: req.body });
          }
        }
      );
    }
  });
};