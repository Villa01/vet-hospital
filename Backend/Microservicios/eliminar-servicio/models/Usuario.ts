import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Cita, CitaId } from './Cita';
import type { Emergencia, EmergenciaId } from './Emergencia';
import type { Especialidad, EspecialidadId } from './Especialidad';
import type { Estudio, EstudioId } from './Estudio';
import type { Horario, HorarioId } from './Horario';
import type { HorarioMedico, HorarioMedicoId } from './HorarioMedico';
import type { Mascota, MascotaId } from './Mascota';
import type { Receta, RecetaId } from './Receta';
import type { TipoUsuario, TipoUsuarioId } from './TipoUsuario';

export interface UsuarioAttributes {
  idUsuario: number;
  TipoUsuario_idTipoUsuario: number;
  Email: string;
  Especialidad_idEspecialidad?: number;
  Frecuente?: number;
  password: string;
  nombres: string;
  apellidos: string;
  telefono?: string;
  activo?: number;
}

export type UsuarioPk = "idUsuario";
export type UsuarioId = Usuario[UsuarioPk];
export type UsuarioOptionalAttributes = "idUsuario" | "Especialidad_idEspecialidad" | "Frecuente" | "telefono" | "activo";
export type UsuarioCreationAttributes = Optional<UsuarioAttributes, UsuarioOptionalAttributes>;

export class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
  idUsuario!: number;
  TipoUsuario_idTipoUsuario!: number;
  Email!: string;
  Especialidad_idEspecialidad?: number;
  Frecuente?: number;
  password!: string;
  nombres!: string;
  apellidos!: string;
  telefono?: string;
  activo?: number;

  // Usuario belongsTo Especialidad via Especialidad_idEspecialidad
  Especialidad_idEspecialidad_Especialidad!: Especialidad;
  getEspecialidad_idEspecialidad_Especialidad!: Sequelize.BelongsToGetAssociationMixin<Especialidad>;
  setEspecialidad_idEspecialidad_Especialidad!: Sequelize.BelongsToSetAssociationMixin<Especialidad, EspecialidadId>;
  createEspecialidad_idEspecialidad_Especialidad!: Sequelize.BelongsToCreateAssociationMixin<Especialidad>;
  // Usuario belongsTo TipoUsuario via TipoUsuario_idTipoUsuario
  TipoUsuario_idTipoUsuario_TipoUsuario!: TipoUsuario;
  getTipoUsuario_idTipoUsuario_TipoUsuario!: Sequelize.BelongsToGetAssociationMixin<TipoUsuario>;
  setTipoUsuario_idTipoUsuario_TipoUsuario!: Sequelize.BelongsToSetAssociationMixin<TipoUsuario, TipoUsuarioId>;
  createTipoUsuario_idTipoUsuario_TipoUsuario!: Sequelize.BelongsToCreateAssociationMixin<TipoUsuario>;
  // Usuario hasMany Cita via MedicoAsignado
  Cita!: Cita[];
  getCita!: Sequelize.HasManyGetAssociationsMixin<Cita>;
  setCita!: Sequelize.HasManySetAssociationsMixin<Cita, CitaId>;
  addCitum!: Sequelize.HasManyAddAssociationMixin<Cita, CitaId>;
  addCita!: Sequelize.HasManyAddAssociationsMixin<Cita, CitaId>;
  createCitum!: Sequelize.HasManyCreateAssociationMixin<Cita>;
  removeCitum!: Sequelize.HasManyRemoveAssociationMixin<Cita, CitaId>;
  removeCita!: Sequelize.HasManyRemoveAssociationsMixin<Cita, CitaId>;
  hasCitum!: Sequelize.HasManyHasAssociationMixin<Cita, CitaId>;
  hasCita!: Sequelize.HasManyHasAssociationsMixin<Cita, CitaId>;
  countCita!: Sequelize.HasManyCountAssociationsMixin;
  // Usuario hasMany Emergencia via Usuario_idUsuario
  Emergencia!: Emergencia[];
  getEmergencia!: Sequelize.HasManyGetAssociationsMixin<Emergencia>;
  setEmergencia!: Sequelize.HasManySetAssociationsMixin<Emergencia, EmergenciaId>;
  addEmergencium!: Sequelize.HasManyAddAssociationMixin<Emergencia, EmergenciaId>;
  addEmergencia!: Sequelize.HasManyAddAssociationsMixin<Emergencia, EmergenciaId>;
  createEmergencium!: Sequelize.HasManyCreateAssociationMixin<Emergencia>;
  removeEmergencium!: Sequelize.HasManyRemoveAssociationMixin<Emergencia, EmergenciaId>;
  removeEmergencia!: Sequelize.HasManyRemoveAssociationsMixin<Emergencia, EmergenciaId>;
  hasEmergencium!: Sequelize.HasManyHasAssociationMixin<Emergencia, EmergenciaId>;
  hasEmergencia!: Sequelize.HasManyHasAssociationsMixin<Emergencia, EmergenciaId>;
  countEmergencia!: Sequelize.HasManyCountAssociationsMixin;
  // Usuario hasMany Estudio via MedicoAsignado
  Estudios!: Estudio[];
  getEstudios!: Sequelize.HasManyGetAssociationsMixin<Estudio>;
  setEstudios!: Sequelize.HasManySetAssociationsMixin<Estudio, EstudioId>;
  addEstudio!: Sequelize.HasManyAddAssociationMixin<Estudio, EstudioId>;
  addEstudios!: Sequelize.HasManyAddAssociationsMixin<Estudio, EstudioId>;
  createEstudio!: Sequelize.HasManyCreateAssociationMixin<Estudio>;
  removeEstudio!: Sequelize.HasManyRemoveAssociationMixin<Estudio, EstudioId>;
  removeEstudios!: Sequelize.HasManyRemoveAssociationsMixin<Estudio, EstudioId>;
  hasEstudio!: Sequelize.HasManyHasAssociationMixin<Estudio, EstudioId>;
  hasEstudios!: Sequelize.HasManyHasAssociationsMixin<Estudio, EstudioId>;
  countEstudios!: Sequelize.HasManyCountAssociationsMixin;
  // Usuario belongsToMany Horario via Usuario_idUsuario and Horario_idHorario
  Horario_idHorario_Horarios!: Horario[];
  getHorario_idHorario_Horarios!: Sequelize.BelongsToManyGetAssociationsMixin<Horario>;
  setHorario_idHorario_Horarios!: Sequelize.BelongsToManySetAssociationsMixin<Horario, HorarioId>;
  addHorario_idHorario_Horario!: Sequelize.BelongsToManyAddAssociationMixin<Horario, HorarioId>;
  addHorario_idHorario_Horarios!: Sequelize.BelongsToManyAddAssociationsMixin<Horario, HorarioId>;
  createHorario_idHorario_Horario!: Sequelize.BelongsToManyCreateAssociationMixin<Horario>;
  removeHorario_idHorario_Horario!: Sequelize.BelongsToManyRemoveAssociationMixin<Horario, HorarioId>;
  removeHorario_idHorario_Horarios!: Sequelize.BelongsToManyRemoveAssociationsMixin<Horario, HorarioId>;
  hasHorario_idHorario_Horario!: Sequelize.BelongsToManyHasAssociationMixin<Horario, HorarioId>;
  hasHorario_idHorario_Horarios!: Sequelize.BelongsToManyHasAssociationsMixin<Horario, HorarioId>;
  countHorario_idHorario_Horarios!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Usuario hasMany HorarioMedico via Usuario_idUsuario
  HorarioMedicos!: HorarioMedico[];
  getHorarioMedicos!: Sequelize.HasManyGetAssociationsMixin<HorarioMedico>;
  setHorarioMedicos!: Sequelize.HasManySetAssociationsMixin<HorarioMedico, HorarioMedicoId>;
  addHorarioMedico!: Sequelize.HasManyAddAssociationMixin<HorarioMedico, HorarioMedicoId>;
  addHorarioMedicos!: Sequelize.HasManyAddAssociationsMixin<HorarioMedico, HorarioMedicoId>;
  createHorarioMedico!: Sequelize.HasManyCreateAssociationMixin<HorarioMedico>;
  removeHorarioMedico!: Sequelize.HasManyRemoveAssociationMixin<HorarioMedico, HorarioMedicoId>;
  removeHorarioMedicos!: Sequelize.HasManyRemoveAssociationsMixin<HorarioMedico, HorarioMedicoId>;
  hasHorarioMedico!: Sequelize.HasManyHasAssociationMixin<HorarioMedico, HorarioMedicoId>;
  hasHorarioMedicos!: Sequelize.HasManyHasAssociationsMixin<HorarioMedico, HorarioMedicoId>;
  countHorarioMedicos!: Sequelize.HasManyCountAssociationsMixin;
  // Usuario hasMany Mascota via Usuario_idUsuario
  Mascota!: Mascota[];
  getMascota!: Sequelize.HasManyGetAssociationsMixin<Mascota>;
  setMascota!: Sequelize.HasManySetAssociationsMixin<Mascota, MascotaId>;
  addMascotum!: Sequelize.HasManyAddAssociationMixin<Mascota, MascotaId>;
  addMascota!: Sequelize.HasManyAddAssociationsMixin<Mascota, MascotaId>;
  createMascotum!: Sequelize.HasManyCreateAssociationMixin<Mascota>;
  removeMascotum!: Sequelize.HasManyRemoveAssociationMixin<Mascota, MascotaId>;
  removeMascota!: Sequelize.HasManyRemoveAssociationsMixin<Mascota, MascotaId>;
  hasMascotum!: Sequelize.HasManyHasAssociationMixin<Mascota, MascotaId>;
  hasMascota!: Sequelize.HasManyHasAssociationsMixin<Mascota, MascotaId>;
  countMascota!: Sequelize.HasManyCountAssociationsMixin;
  // Usuario hasMany Receta via MedicoEmisor
  Receta!: Receta[];
  getReceta!: Sequelize.HasManyGetAssociationsMixin<Receta>;
  setReceta!: Sequelize.HasManySetAssociationsMixin<Receta, RecetaId>;
  addRecetum!: Sequelize.HasManyAddAssociationMixin<Receta, RecetaId>;
  addReceta!: Sequelize.HasManyAddAssociationsMixin<Receta, RecetaId>;
  createRecetum!: Sequelize.HasManyCreateAssociationMixin<Receta>;
  removeRecetum!: Sequelize.HasManyRemoveAssociationMixin<Receta, RecetaId>;
  removeReceta!: Sequelize.HasManyRemoveAssociationsMixin<Receta, RecetaId>;
  hasRecetum!: Sequelize.HasManyHasAssociationMixin<Receta, RecetaId>;
  hasReceta!: Sequelize.HasManyHasAssociationsMixin<Receta, RecetaId>;
  countReceta!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Usuario {
    return Usuario.init({
    idUsuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TipoUsuario_idTipoUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TipoUsuario',
        key: 'idTipoUsuario'
      }
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Especialidad_idEspecialidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Especialidad',
        key: 'idEspecialidad'
      }
    },
    Frecuente: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    password: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    nombres: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    apellidos: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    activo: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'Usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idUsuario" },
        ]
      },
      {
        name: "fk_Usuario_TipoUsuario_idx",
        using: "BTREE",
        fields: [
          { name: "TipoUsuario_idTipoUsuario" },
        ]
      },
      {
        name: "fk_Usuario_Especialidad1_idx",
        using: "BTREE",
        fields: [
          { name: "Especialidad_idEspecialidad" },
        ]
      },
    ]
  });
  }
}
