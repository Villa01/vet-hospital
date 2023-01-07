"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.Usuario = exports.TipoUsuario = exports.Tarifa = exports.Servicio = exports.Sala = exports.Receta = exports.Producto = exports.Paquete_has_Servicio = exports.Paquete = exports.Pago_has_producto = exports.Pago = exports.MotivoCita = exports.Medicamento = exports.Mascota = exports.Log = exports.HorarioMedico = exports.Horario = exports.Estudio = exports.EstadoPago = exports.EstadoEmergencia = exports.EstadoCita = exports.Especialidad = exports.Emergencia = exports.DescripcionMascota = exports.CitaMotivoCita = exports.Cita = exports.Archivo = void 0;
const Archivo_1 = require("./Archivo");
Object.defineProperty(exports, "Archivo", { enumerable: true, get: function () { return Archivo_1.Archivo; } });
const Cita_1 = require("./Cita");
Object.defineProperty(exports, "Cita", { enumerable: true, get: function () { return Cita_1.Cita; } });
const CitaMotivoCita_1 = require("./CitaMotivoCita");
Object.defineProperty(exports, "CitaMotivoCita", { enumerable: true, get: function () { return CitaMotivoCita_1.CitaMotivoCita; } });
const DescripcionMascota_1 = require("./DescripcionMascota");
Object.defineProperty(exports, "DescripcionMascota", { enumerable: true, get: function () { return DescripcionMascota_1.DescripcionMascota; } });
const Emergencia_1 = require("./Emergencia");
Object.defineProperty(exports, "Emergencia", { enumerable: true, get: function () { return Emergencia_1.Emergencia; } });
const Especialidad_1 = require("./Especialidad");
Object.defineProperty(exports, "Especialidad", { enumerable: true, get: function () { return Especialidad_1.Especialidad; } });
const EstadoCita_1 = require("./EstadoCita");
Object.defineProperty(exports, "EstadoCita", { enumerable: true, get: function () { return EstadoCita_1.EstadoCita; } });
const EstadoEmergencia_1 = require("./EstadoEmergencia");
Object.defineProperty(exports, "EstadoEmergencia", { enumerable: true, get: function () { return EstadoEmergencia_1.EstadoEmergencia; } });
const EstadoPago_1 = require("./EstadoPago");
Object.defineProperty(exports, "EstadoPago", { enumerable: true, get: function () { return EstadoPago_1.EstadoPago; } });
const Estudio_1 = require("./Estudio");
Object.defineProperty(exports, "Estudio", { enumerable: true, get: function () { return Estudio_1.Estudio; } });
const Horario_1 = require("./Horario");
Object.defineProperty(exports, "Horario", { enumerable: true, get: function () { return Horario_1.Horario; } });
const HorarioMedico_1 = require("./HorarioMedico");
Object.defineProperty(exports, "HorarioMedico", { enumerable: true, get: function () { return HorarioMedico_1.HorarioMedico; } });
const Log_1 = require("./Log");
Object.defineProperty(exports, "Log", { enumerable: true, get: function () { return Log_1.Log; } });
const Mascota_1 = require("./Mascota");
Object.defineProperty(exports, "Mascota", { enumerable: true, get: function () { return Mascota_1.Mascota; } });
const Medicamento_1 = require("./Medicamento");
Object.defineProperty(exports, "Medicamento", { enumerable: true, get: function () { return Medicamento_1.Medicamento; } });
const MotivoCita_1 = require("./MotivoCita");
Object.defineProperty(exports, "MotivoCita", { enumerable: true, get: function () { return MotivoCita_1.MotivoCita; } });
const Pago_1 = require("./Pago");
Object.defineProperty(exports, "Pago", { enumerable: true, get: function () { return Pago_1.Pago; } });
const Pago_has_producto_1 = require("./Pago_has_producto");
Object.defineProperty(exports, "Pago_has_producto", { enumerable: true, get: function () { return Pago_has_producto_1.Pago_has_producto; } });
const Paquete_1 = require("./Paquete");
Object.defineProperty(exports, "Paquete", { enumerable: true, get: function () { return Paquete_1.Paquete; } });
const Paquete_has_Servicio_1 = require("./Paquete_has_Servicio");
Object.defineProperty(exports, "Paquete_has_Servicio", { enumerable: true, get: function () { return Paquete_has_Servicio_1.Paquete_has_Servicio; } });
const Producto_1 = require("./Producto");
Object.defineProperty(exports, "Producto", { enumerable: true, get: function () { return Producto_1.Producto; } });
const Receta_1 = require("./Receta");
Object.defineProperty(exports, "Receta", { enumerable: true, get: function () { return Receta_1.Receta; } });
const Sala_1 = require("./Sala");
Object.defineProperty(exports, "Sala", { enumerable: true, get: function () { return Sala_1.Sala; } });
const Servicio_1 = require("./Servicio");
Object.defineProperty(exports, "Servicio", { enumerable: true, get: function () { return Servicio_1.Servicio; } });
const Tarifa_1 = require("./Tarifa");
Object.defineProperty(exports, "Tarifa", { enumerable: true, get: function () { return Tarifa_1.Tarifa; } });
const TipoUsuario_1 = require("./TipoUsuario");
Object.defineProperty(exports, "TipoUsuario", { enumerable: true, get: function () { return TipoUsuario_1.TipoUsuario; } });
const Usuario_1 = require("./Usuario");
Object.defineProperty(exports, "Usuario", { enumerable: true, get: function () { return Usuario_1.Usuario; } });
function initModels(sequelize) {
    const Archivo = Archivo_1.Archivo.initModel(sequelize);
    const Cita = Cita_1.Cita.initModel(sequelize);
    const CitaMotivoCita = CitaMotivoCita_1.CitaMotivoCita.initModel(sequelize);
    const DescripcionMascota = DescripcionMascota_1.DescripcionMascota.initModel(sequelize);
    const Emergencia = Emergencia_1.Emergencia.initModel(sequelize);
    const Especialidad = Especialidad_1.Especialidad.initModel(sequelize);
    const EstadoCita = EstadoCita_1.EstadoCita.initModel(sequelize);
    const EstadoEmergencia = EstadoEmergencia_1.EstadoEmergencia.initModel(sequelize);
    const EstadoPago = EstadoPago_1.EstadoPago.initModel(sequelize);
    const Estudio = Estudio_1.Estudio.initModel(sequelize);
    const Horario = Horario_1.Horario.initModel(sequelize);
    const HorarioMedico = HorarioMedico_1.HorarioMedico.initModel(sequelize);
    const Log = Log_1.Log.initModel(sequelize);
    const Mascota = Mascota_1.Mascota.initModel(sequelize);
    const Medicamento = Medicamento_1.Medicamento.initModel(sequelize);
    const MotivoCita = MotivoCita_1.MotivoCita.initModel(sequelize);
    const Pago = Pago_1.Pago.initModel(sequelize);
    const Pago_has_producto = Pago_has_producto_1.Pago_has_producto.initModel(sequelize);
    const Paquete = Paquete_1.Paquete.initModel(sequelize);
    const Paquete_has_Servicio = Paquete_has_Servicio_1.Paquete_has_Servicio.initModel(sequelize);
    const Producto = Producto_1.Producto.initModel(sequelize);
    const Receta = Receta_1.Receta.initModel(sequelize);
    const Sala = Sala_1.Sala.initModel(sequelize);
    const Servicio = Servicio_1.Servicio.initModel(sequelize);
    const Tarifa = Tarifa_1.Tarifa.initModel(sequelize);
    const TipoUsuario = TipoUsuario_1.TipoUsuario.initModel(sequelize);
    const Usuario = Usuario_1.Usuario.initModel(sequelize);
    Cita.belongsToMany(MotivoCita, { as: 'MotivoCita_idMotivoCita_MotivoCita', through: CitaMotivoCita, foreignKey: "Cita_idCita", otherKey: "MotivoCita_idMotivoCita" });
    Horario.belongsToMany(Usuario, { as: 'Usuario_idUsuario_Usuarios', through: HorarioMedico, foreignKey: "Horario_idHorario", otherKey: "Usuario_idUsuario" });
    MotivoCita.belongsToMany(Cita, { as: 'Cita_idCita_Cita', through: CitaMotivoCita, foreignKey: "MotivoCita_idMotivoCita", otherKey: "Cita_idCita" });
    Pago.belongsToMany(Producto, { as: 'Producto_copy1_idProducto_Productos', through: Pago_has_producto, foreignKey: "Pago_idPago", otherKey: "Producto_copy1_idProducto" });
    Paquete.belongsToMany(Servicio, { as: 'Servicio_idServicio_Servicios', through: Paquete_has_Servicio, foreignKey: "Paquete_idPaquete", otherKey: "Servicio_idServicio" });
    Producto.belongsToMany(Pago, { as: 'Pago_idPago_Pagos', through: Pago_has_producto, foreignKey: "Producto_copy1_idProducto", otherKey: "Pago_idPago" });
    Servicio.belongsToMany(Paquete, { as: 'Paquete_idPaquete_Paquetes', through: Paquete_has_Servicio, foreignKey: "Servicio_idServicio", otherKey: "Paquete_idPaquete" });
    Usuario.belongsToMany(Horario, { as: 'Horario_idHorario_Horarios', through: HorarioMedico, foreignKey: "Usuario_idUsuario", otherKey: "Horario_idHorario" });
    Estudio.belongsTo(Archivo, { as: "Archivo_idArchivo_Archivo", foreignKey: "Archivo_idArchivo" });
    Archivo.hasMany(Estudio, { as: "Estudios", foreignKey: "Archivo_idArchivo" });
    Pago.belongsTo(Archivo, { as: "Comprobante_Archivo", foreignKey: "Comprobante" });
    Archivo.hasMany(Pago, { as: "Pagos", foreignKey: "Comprobante" });
    CitaMotivoCita.belongsTo(Cita, { as: "Cita_idCita_Citum", foreignKey: "Cita_idCita" });
    Cita.hasMany(CitaMotivoCita, { as: "CitaMotivoCita", foreignKey: "Cita_idCita" });
    Pago.belongsTo(Cita, { as: "Cita_idCita_Citum", foreignKey: "Cita_idCita" });
    Cita.hasMany(Pago, { as: "Pagos", foreignKey: "Cita_idCita" });
    Mascota.belongsTo(DescripcionMascota, { as: "DescripcionMascota_idDescripcionMascota_DescripcionMascotum", foreignKey: "DescripcionMascota_idDescripcionMascota" });
    DescripcionMascota.hasMany(Mascota, { as: "Mascota", foreignKey: "DescripcionMascota_idDescripcionMascota" });
    Pago.belongsTo(Emergencia, { as: "Emergencia_idEmergencia_Emergencium", foreignKey: "Emergencia_idEmergencia" });
    Emergencia.hasMany(Pago, { as: "Pagos", foreignKey: "Emergencia_idEmergencia" });
    Usuario.belongsTo(Especialidad, { as: "Especialidad_idEspecialidad_Especialidad", foreignKey: "Especialidad_idEspecialidad" });
    Especialidad.hasMany(Usuario, { as: "Usuarios", foreignKey: "Especialidad_idEspecialidad" });
    Cita.belongsTo(EstadoCita, { as: "EstadoCita_idEstadoCita_EstadoCitum", foreignKey: "EstadoCita_idEstadoCita" });
    EstadoCita.hasMany(Cita, { as: "Cita", foreignKey: "EstadoCita_idEstadoCita" });
    Emergencia.belongsTo(EstadoEmergencia, { as: "EstadoEmergencia_idEstadoEmergencia_EstadoEmergencium", foreignKey: "EstadoEmergencia_idEstadoEmergencia" });
    EstadoEmergencia.hasMany(Emergencia, { as: "Emergencia", foreignKey: "EstadoEmergencia_idEstadoEmergencia" });
    Pago.belongsTo(EstadoPago, { as: "EstadoPago_idEstadoPago_EstadoPago", foreignKey: "EstadoPago_idEstadoPago" });
    EstadoPago.hasMany(Pago, { as: "Pagos", foreignKey: "EstadoPago_idEstadoPago" });
    HorarioMedico.belongsTo(Horario, { as: "Horario_idHorario_Horario", foreignKey: "Horario_idHorario" });
    Horario.hasMany(HorarioMedico, { as: "HorarioMedicos", foreignKey: "Horario_idHorario" });
    Cita.belongsTo(Mascota, { as: "Mascota_idMascota_Mascotum", foreignKey: "Mascota_idMascota" });
    Mascota.hasMany(Cita, { as: "Cita", foreignKey: "Mascota_idMascota" });
    Emergencia.belongsTo(Mascota, { as: "Mascota_idMascota_Mascotum", foreignKey: "Mascota_idMascota" });
    Mascota.hasMany(Emergencia, { as: "Emergencia", foreignKey: "Mascota_idMascota" });
    Estudio.belongsTo(Mascota, { as: "Mascota_idMascota_Mascotum", foreignKey: "Mascota_idMascota" });
    Mascota.hasMany(Estudio, { as: "Estudios", foreignKey: "Mascota_idMascota" });
    Receta.belongsTo(Mascota, { as: "Mascota_idMascota_Mascotum", foreignKey: "Mascota_idMascota" });
    Mascota.hasMany(Receta, { as: "Receta", foreignKey: "Mascota_idMascota" });
    Receta.belongsTo(Medicamento, { as: "Medicamento_idMedicamento_Medicamento", foreignKey: "Medicamento_idMedicamento" });
    Medicamento.hasMany(Receta, { as: "Receta", foreignKey: "Medicamento_idMedicamento" });
    CitaMotivoCita.belongsTo(MotivoCita, { as: "MotivoCita_idMotivoCita_MotivoCitum", foreignKey: "MotivoCita_idMotivoCita" });
    MotivoCita.hasMany(CitaMotivoCita, { as: "CitaMotivoCita", foreignKey: "MotivoCita_idMotivoCita" });
    Pago_has_producto.belongsTo(Pago, { as: "Pago_idPago_Pago", foreignKey: "Pago_idPago" });
    Pago.hasMany(Pago_has_producto, { as: "Pago_has_productos", foreignKey: "Pago_idPago" });
    Paquete_has_Servicio.belongsTo(Paquete, { as: "Paquete_idPaquete_Paquete", foreignKey: "Paquete_idPaquete" });
    Paquete.hasMany(Paquete_has_Servicio, { as: "Paquete_has_Servicios", foreignKey: "Paquete_idPaquete" });
    Pago_has_producto.belongsTo(Producto, { as: "Producto_copy1_idProducto_Producto", foreignKey: "Producto_copy1_idProducto" });
    Producto.hasMany(Pago_has_producto, { as: "Pago_has_productos", foreignKey: "Producto_copy1_idProducto" });
    Emergencia.belongsTo(Sala, { as: "Sala_idSala_Sala", foreignKey: "Sala_idSala" });
    Sala.hasMany(Emergencia, { as: "Emergencia", foreignKey: "Sala_idSala" });
    Paquete_has_Servicio.belongsTo(Servicio, { as: "Servicio_idServicio_Servicio", foreignKey: "Servicio_idServicio" });
    Servicio.hasMany(Paquete_has_Servicio, { as: "Paquete_has_Servicios", foreignKey: "Servicio_idServicio" });
    Pago.belongsTo(Tarifa, { as: "Tarifa_idTarifa_Tarifa", foreignKey: "Tarifa_idTarifa" });
    Tarifa.hasMany(Pago, { as: "Pagos", foreignKey: "Tarifa_idTarifa" });
    Usuario.belongsTo(TipoUsuario, { as: "TipoUsuario_idTipoUsuario_TipoUsuario", foreignKey: "TipoUsuario_idTipoUsuario" });
    TipoUsuario.hasMany(Usuario, { as: "Usuarios", foreignKey: "TipoUsuario_idTipoUsuario" });
    Cita.belongsTo(Usuario, { as: "MedicoAsignado_Usuario", foreignKey: "MedicoAsignado" });
    Usuario.hasMany(Cita, { as: "Cita", foreignKey: "MedicoAsignado" });
    Emergencia.belongsTo(Usuario, { as: "Usuario_idUsuario_Usuario", foreignKey: "Usuario_idUsuario" });
    Usuario.hasMany(Emergencia, { as: "Emergencia", foreignKey: "Usuario_idUsuario" });
    Estudio.belongsTo(Usuario, { as: "MedicoAsignado_Usuario", foreignKey: "MedicoAsignado" });
    Usuario.hasMany(Estudio, { as: "Estudios", foreignKey: "MedicoAsignado" });
    HorarioMedico.belongsTo(Usuario, { as: "Usuario_idUsuario_Usuario", foreignKey: "Usuario_idUsuario" });
    Usuario.hasMany(HorarioMedico, { as: "HorarioMedicos", foreignKey: "Usuario_idUsuario" });
    Mascota.belongsTo(Usuario, { as: "Usuario_idUsuario_Usuario", foreignKey: "Usuario_idUsuario" });
    Usuario.hasMany(Mascota, { as: "Mascota", foreignKey: "Usuario_idUsuario" });
    Receta.belongsTo(Usuario, { as: "MedicoEmisor_Usuario", foreignKey: "MedicoEmisor" });
    Usuario.hasMany(Receta, { as: "Receta", foreignKey: "MedicoEmisor" });
    return {
        Archivo: Archivo,
        Cita: Cita,
        CitaMotivoCita: CitaMotivoCita,
        DescripcionMascota: DescripcionMascota,
        Emergencia: Emergencia,
        Especialidad: Especialidad,
        EstadoCita: EstadoCita,
        EstadoEmergencia: EstadoEmergencia,
        EstadoPago: EstadoPago,
        Estudio: Estudio,
        Horario: Horario,
        HorarioMedico: HorarioMedico,
        Log: Log,
        Mascota: Mascota,
        Medicamento: Medicamento,
        MotivoCita: MotivoCita,
        Pago: Pago,
        Pago_has_producto: Pago_has_producto,
        Paquete: Paquete,
        Paquete_has_Servicio: Paquete_has_Servicio,
        Producto: Producto,
        Receta: Receta,
        Sala: Sala,
        Servicio: Servicio,
        Tarifa: Tarifa,
        TipoUsuario: TipoUsuario,
        Usuario: Usuario,
    };
}
exports.initModels = initModels;
//# sourceMappingURL=init-models.js.map