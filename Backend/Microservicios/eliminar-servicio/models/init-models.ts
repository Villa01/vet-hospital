import type { Sequelize } from "sequelize";
import { Archivo as _Archivo } from "./Archivo";
import type { ArchivoAttributes, ArchivoCreationAttributes } from "./Archivo";
import { Cita as _Cita } from "./Cita";
import type { CitaAttributes, CitaCreationAttributes } from "./Cita";
import { CitaMotivoCita as _CitaMotivoCita } from "./CitaMotivoCita";
import type { CitaMotivoCitaAttributes, CitaMotivoCitaCreationAttributes } from "./CitaMotivoCita";
import { DescripcionMascota as _DescripcionMascota } from "./DescripcionMascota";
import type { DescripcionMascotaAttributes, DescripcionMascotaCreationAttributes } from "./DescripcionMascota";
import { Emergencia as _Emergencia } from "./Emergencia";
import type { EmergenciaAttributes, EmergenciaCreationAttributes } from "./Emergencia";
import { Especialidad as _Especialidad } from "./Especialidad";
import type { EspecialidadAttributes, EspecialidadCreationAttributes } from "./Especialidad";
import { EstadoCita as _EstadoCita } from "./EstadoCita";
import type { EstadoCitaAttributes, EstadoCitaCreationAttributes } from "./EstadoCita";
import { EstadoEmergencia as _EstadoEmergencia } from "./EstadoEmergencia";
import type { EstadoEmergenciaAttributes, EstadoEmergenciaCreationAttributes } from "./EstadoEmergencia";
import { EstadoPago as _EstadoPago } from "./EstadoPago";
import type { EstadoPagoAttributes, EstadoPagoCreationAttributes } from "./EstadoPago";
import { Estudio as _Estudio } from "./Estudio";
import type { EstudioAttributes, EstudioCreationAttributes } from "./Estudio";
import { Horario as _Horario } from "./Horario";
import type { HorarioAttributes, HorarioCreationAttributes } from "./Horario";
import { HorarioMedico as _HorarioMedico } from "./HorarioMedico";
import type { HorarioMedicoAttributes, HorarioMedicoCreationAttributes } from "./HorarioMedico";
import { Log as _Log } from "./Log";
import type { LogAttributes, LogCreationAttributes } from "./Log";
import { Mascota as _Mascota } from "./Mascota";
import type { MascotaAttributes, MascotaCreationAttributes } from "./Mascota";
import { Medicamento as _Medicamento } from "./Medicamento";
import type { MedicamentoAttributes, MedicamentoCreationAttributes } from "./Medicamento";
import { MotivoCita as _MotivoCita } from "./MotivoCita";
import type { MotivoCitaAttributes, MotivoCitaCreationAttributes } from "./MotivoCita";
import { Pago as _Pago } from "./Pago";
import type { PagoAttributes, PagoCreationAttributes } from "./Pago";
import { Pago_has_producto as _Pago_has_producto } from "./Pago_has_producto";
import type { Pago_has_productoAttributes, Pago_has_productoCreationAttributes } from "./Pago_has_producto";
import { Paquete as _Paquete } from "./Paquete";
import type { PaqueteAttributes, PaqueteCreationAttributes } from "./Paquete";
import { Paquete_has_Servicio as _Paquete_has_Servicio } from "./Paquete_has_Servicio";
import type { Paquete_has_ServicioAttributes, Paquete_has_ServicioCreationAttributes } from "./Paquete_has_Servicio";
import { Producto as _Producto } from "./Producto";
import type { ProductoAttributes, ProductoCreationAttributes } from "./Producto";
import { Receta as _Receta } from "./Receta";
import type { RecetaAttributes, RecetaCreationAttributes } from "./Receta";
import { Sala as _Sala } from "./Sala";
import type { SalaAttributes, SalaCreationAttributes } from "./Sala";
import { Servicio as _Servicio } from "./Servicio";
import type { ServicioAttributes, ServicioCreationAttributes } from "./Servicio";
import { Tarifa as _Tarifa } from "./Tarifa";
import type { TarifaAttributes, TarifaCreationAttributes } from "./Tarifa";
import { TipoUsuario as _TipoUsuario } from "./TipoUsuario";
import type { TipoUsuarioAttributes, TipoUsuarioCreationAttributes } from "./TipoUsuario";
import { Usuario as _Usuario } from "./Usuario";
import type { UsuarioAttributes, UsuarioCreationAttributes } from "./Usuario";

export {
  _Archivo as Archivo,
  _Cita as Cita,
  _CitaMotivoCita as CitaMotivoCita,
  _DescripcionMascota as DescripcionMascota,
  _Emergencia as Emergencia,
  _Especialidad as Especialidad,
  _EstadoCita as EstadoCita,
  _EstadoEmergencia as EstadoEmergencia,
  _EstadoPago as EstadoPago,
  _Estudio as Estudio,
  _Horario as Horario,
  _HorarioMedico as HorarioMedico,
  _Log as Log,
  _Mascota as Mascota,
  _Medicamento as Medicamento,
  _MotivoCita as MotivoCita,
  _Pago as Pago,
  _Pago_has_producto as Pago_has_producto,
  _Paquete as Paquete,
  _Paquete_has_Servicio as Paquete_has_Servicio,
  _Producto as Producto,
  _Receta as Receta,
  _Sala as Sala,
  _Servicio as Servicio,
  _Tarifa as Tarifa,
  _TipoUsuario as TipoUsuario,
  _Usuario as Usuario,
};

export type {
  ArchivoAttributes,
  ArchivoCreationAttributes,
  CitaAttributes,
  CitaCreationAttributes,
  CitaMotivoCitaAttributes,
  CitaMotivoCitaCreationAttributes,
  DescripcionMascotaAttributes,
  DescripcionMascotaCreationAttributes,
  EmergenciaAttributes,
  EmergenciaCreationAttributes,
  EspecialidadAttributes,
  EspecialidadCreationAttributes,
  EstadoCitaAttributes,
  EstadoCitaCreationAttributes,
  EstadoEmergenciaAttributes,
  EstadoEmergenciaCreationAttributes,
  EstadoPagoAttributes,
  EstadoPagoCreationAttributes,
  EstudioAttributes,
  EstudioCreationAttributes,
  HorarioAttributes,
  HorarioCreationAttributes,
  HorarioMedicoAttributes,
  HorarioMedicoCreationAttributes,
  LogAttributes,
  LogCreationAttributes,
  MascotaAttributes,
  MascotaCreationAttributes,
  MedicamentoAttributes,
  MedicamentoCreationAttributes,
  MotivoCitaAttributes,
  MotivoCitaCreationAttributes,
  PagoAttributes,
  PagoCreationAttributes,
  Pago_has_productoAttributes,
  Pago_has_productoCreationAttributes,
  PaqueteAttributes,
  PaqueteCreationAttributes,
  Paquete_has_ServicioAttributes,
  Paquete_has_ServicioCreationAttributes,
  ProductoAttributes,
  ProductoCreationAttributes,
  RecetaAttributes,
  RecetaCreationAttributes,
  SalaAttributes,
  SalaCreationAttributes,
  ServicioAttributes,
  ServicioCreationAttributes,
  TarifaAttributes,
  TarifaCreationAttributes,
  TipoUsuarioAttributes,
  TipoUsuarioCreationAttributes,
  UsuarioAttributes,
  UsuarioCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Archivo = _Archivo.initModel(sequelize);
  const Cita = _Cita.initModel(sequelize);
  const CitaMotivoCita = _CitaMotivoCita.initModel(sequelize);
  const DescripcionMascota = _DescripcionMascota.initModel(sequelize);
  const Emergencia = _Emergencia.initModel(sequelize);
  const Especialidad = _Especialidad.initModel(sequelize);
  const EstadoCita = _EstadoCita.initModel(sequelize);
  const EstadoEmergencia = _EstadoEmergencia.initModel(sequelize);
  const EstadoPago = _EstadoPago.initModel(sequelize);
  const Estudio = _Estudio.initModel(sequelize);
  const Horario = _Horario.initModel(sequelize);
  const HorarioMedico = _HorarioMedico.initModel(sequelize);
  const Log = _Log.initModel(sequelize);
  const Mascota = _Mascota.initModel(sequelize);
  const Medicamento = _Medicamento.initModel(sequelize);
  const MotivoCita = _MotivoCita.initModel(sequelize);
  const Pago = _Pago.initModel(sequelize);
  const Pago_has_producto = _Pago_has_producto.initModel(sequelize);
  const Paquete = _Paquete.initModel(sequelize);
  const Paquete_has_Servicio = _Paquete_has_Servicio.initModel(sequelize);
  const Producto = _Producto.initModel(sequelize);
  const Receta = _Receta.initModel(sequelize);
  const Sala = _Sala.initModel(sequelize);
  const Servicio = _Servicio.initModel(sequelize);
  const Tarifa = _Tarifa.initModel(sequelize);
  const TipoUsuario = _TipoUsuario.initModel(sequelize);
  const Usuario = _Usuario.initModel(sequelize);

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
