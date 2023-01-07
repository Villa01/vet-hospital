import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Cita, CitaId } from './Cita';
import type { DescripcionMascota, DescripcionMascotaId } from './DescripcionMascota';
import type { Emergencia, EmergenciaId } from './Emergencia';
import type { Estudio, EstudioId } from './Estudio';
import type { Receta, RecetaId } from './Receta';
import type { Usuario, UsuarioId } from './Usuario';

export interface MascotaAttributes {
  idMascota: number;
  edad: number;
  foto: string;
  Usuario_idUsuario: number;
  DescripcionMascota_idDescripcionMascota: number;
}

export type MascotaPk = "idMascota";
export type MascotaId = Mascota[MascotaPk];
export type MascotaOptionalAttributes = "idMascota";
export type MascotaCreationAttributes = Optional<MascotaAttributes, MascotaOptionalAttributes>;

export class Mascota extends Model<MascotaAttributes, MascotaCreationAttributes> implements MascotaAttributes {
  idMascota!: number;
  edad!: number;
  foto!: string;
  Usuario_idUsuario!: number;
  DescripcionMascota_idDescripcionMascota!: number;

  // Mascota belongsTo DescripcionMascota via DescripcionMascota_idDescripcionMascota
  DescripcionMascota_idDescripcionMascota_DescripcionMascotum!: DescripcionMascota;
  getDescripcionMascota_idDescripcionMascota_DescripcionMascotum!: Sequelize.BelongsToGetAssociationMixin<DescripcionMascota>;
  setDescripcionMascota_idDescripcionMascota_DescripcionMascotum!: Sequelize.BelongsToSetAssociationMixin<DescripcionMascota, DescripcionMascotaId>;
  createDescripcionMascota_idDescripcionMascota_DescripcionMascotum!: Sequelize.BelongsToCreateAssociationMixin<DescripcionMascota>;
  // Mascota hasMany Cita via Mascota_idMascota
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
  // Mascota hasMany Emergencia via Mascota_idMascota
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
  // Mascota hasMany Estudio via Mascota_idMascota
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
  // Mascota hasMany Receta via Mascota_idMascota
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
  // Mascota belongsTo Usuario via Usuario_idUsuario
  Usuario_idUsuario_Usuario!: Usuario;
  getUsuario_idUsuario_Usuario!: Sequelize.BelongsToGetAssociationMixin<Usuario>;
  setUsuario_idUsuario_Usuario!: Sequelize.BelongsToSetAssociationMixin<Usuario, UsuarioId>;
  createUsuario_idUsuario_Usuario!: Sequelize.BelongsToCreateAssociationMixin<Usuario>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Mascota {
    return Mascota.init({
    idMascota: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    foto: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Usuario_idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuario',
        key: 'idUsuario'
      }
    },
    DescripcionMascota_idDescripcionMascota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'DescripcionMascota',
        key: 'idDescripcionMascota'
      }
    }
  }, {
    sequelize,
    tableName: 'Mascota',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idMascota" },
        ]
      },
      {
        name: "fk_Mascota_Usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "Usuario_idUsuario" },
        ]
      },
      {
        name: "fk_Mascota_DescripcionMascota1_idx",
        using: "BTREE",
        fields: [
          { name: "DescripcionMascota_idDescripcionMascota" },
        ]
      },
    ]
  });
  }
}
