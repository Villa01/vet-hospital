var DataTypes = require("sequelize").DataTypes;
var _Archivo = require("./Archivo");
var _Cita = require("./Cita");
var _CitaMotivoCita = require("./CitaMotivoCita");
var _DescripcionMascota = require("./DescripcionMascota");
var _Emergencia = require("./Emergencia");
var _Especialidad = require("./Especialidad");
var _EstadoCita = require("./EstadoCita");
var _EstadoEmergencia = require("./EstadoEmergencia");
var _EstadoPago = require("./EstadoPago");
var _Estudio = require("./Estudio");
var _Horario = require("./Horario");
var _HorarioMedico = require("./HorarioMedico");
var _Log = require("./Log");
var _Mascota = require("./Mascota");
var _Medicamento = require("./Medicamento");
var _MotivoCita = require("./MotivoCita");
var _Pago = require("./Pago");
var _Pago_has_producto = require("./Pago_has_producto");
var _Paquete = require("./Paquete");
var _Paquete_has_Servicio = require("./Paquete_has_Servicio");
var _Producto = require("./Producto");
var _Receta = require("./Receta");
var _Sala = require("./Sala");
var _Servicio = require("./Servicio");
var _Tarifa = require("./Tarifa");
var _TipoUsuario = require("./TipoUsuario");
var _Usuario = require("./Usuario");

function initModels(sequelize) {
  var Archivo = _Archivo(sequelize, DataTypes);
  var Cita = _Cita(sequelize, DataTypes);
  var CitaMotivoCita = _CitaMotivoCita(sequelize, DataTypes);
  var DescripcionMascota = _DescripcionMascota(sequelize, DataTypes);
  var Emergencia = _Emergencia(sequelize, DataTypes);
  var Especialidad = _Especialidad(sequelize, DataTypes);
  var EstadoCita = _EstadoCita(sequelize, DataTypes);
  var EstadoEmergencia = _EstadoEmergencia(sequelize, DataTypes);
  var EstadoPago = _EstadoPago(sequelize, DataTypes);
  var Estudio = _Estudio(sequelize, DataTypes);
  var Horario = _Horario(sequelize, DataTypes);
  var HorarioMedico = _HorarioMedico(sequelize, DataTypes);
  var Log = _Log(sequelize, DataTypes);
  var Mascota = _Mascota(sequelize, DataTypes);
  var Medicamento = _Medicamento(sequelize, DataTypes);
  var MotivoCita = _MotivoCita(sequelize, DataTypes);
  var Pago = _Pago(sequelize, DataTypes);
  var Pago_has_producto = _Pago_has_producto(sequelize, DataTypes);
  var Paquete = _Paquete(sequelize, DataTypes);
  var Paquete_has_Servicio = _Paquete_has_Servicio(sequelize, DataTypes);
  var Producto = _Producto(sequelize, DataTypes);
  var Receta = _Receta(sequelize, DataTypes);
  var Sala = _Sala(sequelize, DataTypes);
  var Servicio = _Servicio(sequelize, DataTypes);
  var Tarifa = _Tarifa(sequelize, DataTypes);
  var TipoUsuario = _TipoUsuario(sequelize, DataTypes);
  var Usuario = _Usuario(sequelize, DataTypes);

  Cita.belongsToMany(MotivoCita, { as: 'MotivoCita_idMotivoCita_MotivoCita', through: CitaMotivoCita, foreignKey: "Cita_idCita", otherKey: "MotivoCita_idMotivoCita" });
  Horario.belongsToMany(Usuario, { as: 'Usuario_idUsuario_Usuarios', through: HorarioMedico, foreignKey: "Horario_idHorario", otherKey: "Usuario_idUsuario" });
  MotivoCita.belongsToMany(Cita, { as: 'Cita_idCita_Cita', through: CitaMotivoCita, foreignKey: "MotivoCita_idMotivoCita", otherKey: "Cita_idCita" });
  Pago.belongsToMany(Producto, { as: 'Producto_copy1_idProducto_Productos', through: Pago_has_producto, foreignKey: "Pago_idPago", otherKey: "Producto_copy1_idProducto" });
  Paquete.belongsToMany(Servicio, { as: 'Servicio_idServicio_Servicios', through: Paquete_has_Servicio, foreignKey: "Paquete_idPaquete", otherKey: "Servicio_idServicio" });
  Producto.belongsToMany(Pago, { as: 'Pago_idPago_Pagos', through: Pago_has_producto, foreignKey: "Producto_copy1_idProducto", otherKey: "Pago_idPago" });
  Servicio.belongsToMany(Paquete, { as: 'Paquete_idPaquete_Paquetes', through: Paquete_has_Servicio, foreignKey: "Servicio_idServicio", otherKey: "Paquete_idPaquete" });
  Usuario.belongsToMany(Horario, { as: 'Horario_idHorario_Horarios', through: HorarioMedico, foreignKey: "Usuario_idUsuario", otherKey: "Horario_idHorario" });
  Estudio.belongsTo(Archivo, { as: "Archivo_idArchivo_Archivo", foreignKey: "Archivo_idArchivo"});
  Archivo.hasMany(Estudio, { as: "Estudios", foreignKey: "Archivo_idArchivo"});
  Pago.belongsTo(Archivo, { as: "Comprobante_Archivo", foreignKey: "Comprobante"});
  Archivo.hasMany(Pago, { as: "Pagos", foreignKey: "Comprobante"});
  CitaMotivoCita.belongsTo(Cita, { as: "Cita_idCita_Citum", foreignKey: "Cita_idCita"});
  Cita.hasMany(CitaMotivoCita, { as: "CitaMotivoCita", foreignKey: "Cita_idCita"});
  Pago.belongsTo(Cita, { as: "Cita_idCita_Citum", foreignKey: "Cita_idCita"});
  Cita.hasMany(Pago, { as: "Pagos", foreignKey: "Cita_idCita"});
  Mascota.belongsTo(DescripcionMascota, { as: "DescripcionMascota_idDescripcionMascota_DescripcionMascotum", foreignKey: "DescripcionMascota_idDescripcionMascota"});
  DescripcionMascota.hasMany(Mascota, { as: "Mascota", foreignKey: "DescripcionMascota_idDescripcionMascota"});
  Pago.belongsTo(Emergencia, { as: "Emergencia_idEmergencia_Emergencium", foreignKey: "Emergencia_idEmergencia"});
  Emergencia.hasMany(Pago, { as: "Pagos", foreignKey: "Emergencia_idEmergencia"});
  Usuario.belongsTo(Especialidad, { as: "Especialidad_idEspecialidad_Especialidad", foreignKey: "Especialidad_idEspecialidad"});
  Especialidad.hasMany(Usuario, { as: "Usuarios", foreignKey: "Especialidad_idEspecialidad"});
  Cita.belongsTo(EstadoCita, { as: "EstadoCita_idEstadoCita_EstadoCitum", foreignKey: "EstadoCita_idEstadoCita"});
  EstadoCita.hasMany(Cita, { as: "Cita", foreignKey: "EstadoCita_idEstadoCita"});
  Emergencia.belongsTo(EstadoEmergencia, { as: "EstadoEmergencia_idEstadoEmergencia_EstadoEmergencium", foreignKey: "EstadoEmergencia_idEstadoEmergencia"});
  EstadoEmergencia.hasMany(Emergencia, { as: "Emergencia", foreignKey: "EstadoEmergencia_idEstadoEmergencia"});
  Pago.belongsTo(EstadoPago, { as: "EstadoPago_idEstadoPago_EstadoPago", foreignKey: "EstadoPago_idEstadoPago"});
  EstadoPago.hasMany(Pago, { as: "Pagos", foreignKey: "EstadoPago_idEstadoPago"});
  HorarioMedico.belongsTo(Horario, { as: "Horario_idHorario_Horario", foreignKey: "Horario_idHorario"});
  Horario.hasMany(HorarioMedico, { as: "HorarioMedicos", foreignKey: "Horario_idHorario"});
  Cita.belongsTo(Mascota, { as: "Mascota_idMascota_Mascotum", foreignKey: "Mascota_idMascota"});
  Mascota.hasMany(Cita, { as: "Cita", foreignKey: "Mascota_idMascota"});
  Emergencia.belongsTo(Mascota, { as: "Mascota_idMascota_Mascotum", foreignKey: "Mascota_idMascota"});
  Mascota.hasMany(Emergencia, { as: "Emergencia", foreignKey: "Mascota_idMascota"});
  Estudio.belongsTo(Mascota, { as: "Mascota_idMascota_Mascotum", foreignKey: "Mascota_idMascota"});
  Mascota.hasMany(Estudio, { as: "Estudios", foreignKey: "Mascota_idMascota"});
  Receta.belongsTo(Mascota, { as: "Mascota_idMascota_Mascotum", foreignKey: "Mascota_idMascota"});
  Mascota.hasMany(Receta, { as: "Receta", foreignKey: "Mascota_idMascota"});
  Receta.belongsTo(Medicamento, { as: "Medicamento_idMedicamento_Medicamento", foreignKey: "Medicamento_idMedicamento"});
  Medicamento.hasMany(Receta, { as: "Receta", foreignKey: "Medicamento_idMedicamento"});
  CitaMotivoCita.belongsTo(MotivoCita, { as: "MotivoCita_idMotivoCita_MotivoCitum", foreignKey: "MotivoCita_idMotivoCita"});
  MotivoCita.hasMany(CitaMotivoCita, { as: "CitaMotivoCita", foreignKey: "MotivoCita_idMotivoCita"});
  Pago_has_producto.belongsTo(Pago, { as: "Pago_idPago_Pago", foreignKey: "Pago_idPago"});
  Pago.hasMany(Pago_has_producto, { as: "Pago_has_productos", foreignKey: "Pago_idPago"});
  Paquete_has_Servicio.belongsTo(Paquete, { as: "Paquete_idPaquete_Paquete", foreignKey: "Paquete_idPaquete"});
  Paquete.hasMany(Paquete_has_Servicio, { as: "Paquete_has_Servicios", foreignKey: "Paquete_idPaquete"});
  Pago_has_producto.belongsTo(Producto, { as: "Producto_copy1_idProducto_Producto", foreignKey: "Producto_copy1_idProducto"});
  Producto.hasMany(Pago_has_producto, { as: "Pago_has_productos", foreignKey: "Producto_copy1_idProducto"});
  Emergencia.belongsTo(Sala, { as: "Sala_idSala_Sala", foreignKey: "Sala_idSala"});
  Sala.hasMany(Emergencia, { as: "Emergencia", foreignKey: "Sala_idSala"});
  Paquete_has_Servicio.belongsTo(Servicio, { as: "Servicio_idServicio_Servicio", foreignKey: "Servicio_idServicio"});
  Servicio.hasMany(Paquete_has_Servicio, { as: "Paquete_has_Servicios", foreignKey: "Servicio_idServicio"});
  Pago.belongsTo(Tarifa, { as: "Tarifa_idTarifa_Tarifa", foreignKey: "Tarifa_idTarifa"});
  Tarifa.hasMany(Pago, { as: "Pagos", foreignKey: "Tarifa_idTarifa"});
  Usuario.belongsTo(TipoUsuario, { as: "TipoUsuario_idTipoUsuario_TipoUsuario", foreignKey: "TipoUsuario_idTipoUsuario"});
  TipoUsuario.hasMany(Usuario, { as: "Usuarios", foreignKey: "TipoUsuario_idTipoUsuario"});
  Cita.belongsTo(Usuario, { as: "MedicoAsignado_Usuario", foreignKey: "MedicoAsignado"});
  Usuario.hasMany(Cita, { as: "Cita", foreignKey: "MedicoAsignado"});
  Emergencia.belongsTo(Usuario, { as: "Usuario_idUsuario_Usuario", foreignKey: "Usuario_idUsuario"});
  Usuario.hasMany(Emergencia, { as: "Emergencia", foreignKey: "Usuario_idUsuario"});
  Estudio.belongsTo(Usuario, { as: "MedicoAsignado_Usuario", foreignKey: "MedicoAsignado"});
  Usuario.hasMany(Estudio, { as: "Estudios", foreignKey: "MedicoAsignado"});
  HorarioMedico.belongsTo(Usuario, { as: "Usuario_idUsuario_Usuario", foreignKey: "Usuario_idUsuario"});
  Usuario.hasMany(HorarioMedico, { as: "HorarioMedicos", foreignKey: "Usuario_idUsuario"});
  Mascota.belongsTo(Usuario, { as: "Usuario_idUsuario_Usuario", foreignKey: "Usuario_idUsuario"});
  Usuario.hasMany(Mascota, { as: "Mascota", foreignKey: "Usuario_idUsuario"});
  Receta.belongsTo(Usuario, { as: "MedicoEmisor_Usuario", foreignKey: "MedicoEmisor"});
  Usuario.hasMany(Receta, { as: "Receta", foreignKey: "MedicoEmisor"});

  return {
    Archivo,
    Cita,
    CitaMotivoCita,
    DescripcionMascota,
    Emergencia,
    Especialidad,
    EstadoCita,
    EstadoEmergencia,
    EstadoPago,
    Estudio,
    Horario,
    HorarioMedico,
    Log,
    Mascota,
    Medicamento,
    MotivoCita,
    Pago,
    Pago_has_producto,
    Paquete,
    Paquete_has_Servicio,
    Producto,
    Receta,
    Sala,
    Servicio,
    Tarifa,
    TipoUsuario,
    Usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
