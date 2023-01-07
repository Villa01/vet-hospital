import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Archivo, ArchivoId } from './Archivo';
import type { Mascota, MascotaId } from './Mascota';
import type { Usuario, UsuarioId } from './Usuario';

export interface EstudioAttributes {
  idEstudio: number;
  MedicoAsignado: number;
  Mascota_idMascota: number;
  Archivo_idArchivo: number;
}

export type EstudioPk = "idEstudio";
export type EstudioId = Estudio[EstudioPk];
export type EstudioOptionalAttributes = "idEstudio";
export type EstudioCreationAttributes = Optional<EstudioAttributes, EstudioOptionalAttributes>;

export class Estudio extends Model<EstudioAttributes, EstudioCreationAttributes> implements EstudioAttributes {
  idEstudio!: number;
  MedicoAsignado!: number;
  Mascota_idMascota!: number;
  Archivo_idArchivo!: number;

  // Estudio belongsTo Archivo via Archivo_idArchivo
  Archivo_idArchivo_Archivo!: Archivo;
  getArchivo_idArchivo_Archivo!: Sequelize.BelongsToGetAssociationMixin<Archivo>;
  setArchivo_idArchivo_Archivo!: Sequelize.BelongsToSetAssociationMixin<Archivo, ArchivoId>;
  createArchivo_idArchivo_Archivo!: Sequelize.BelongsToCreateAssociationMixin<Archivo>;
  // Estudio belongsTo Mascota via Mascota_idMascota
  Mascota_idMascota_Mascotum!: Mascota;
  getMascota_idMascota_Mascotum!: Sequelize.BelongsToGetAssociationMixin<Mascota>;
  setMascota_idMascota_Mascotum!: Sequelize.BelongsToSetAssociationMixin<Mascota, MascotaId>;
  createMascota_idMascota_Mascotum!: Sequelize.BelongsToCreateAssociationMixin<Mascota>;
  // Estudio belongsTo Usuario via MedicoAsignado
  MedicoAsignado_Usuario!: Usuario;
  getMedicoAsignado_Usuario!: Sequelize.BelongsToGetAssociationMixin<Usuario>;
  setMedicoAsignado_Usuario!: Sequelize.BelongsToSetAssociationMixin<Usuario, UsuarioId>;
  createMedicoAsignado_Usuario!: Sequelize.BelongsToCreateAssociationMixin<Usuario>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Estudio {
    return Estudio.init({
    idEstudio: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MedicoAsignado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuario',
        key: 'idUsuario'
      }
    },
    Mascota_idMascota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Mascota',
        key: 'idMascota'
      }
    },
    Archivo_idArchivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Archivo',
        key: 'idArchivo'
      }
    }
  }, {
    sequelize,
    tableName: 'Estudio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEstudio" },
        ]
      },
      {
        name: "fk_Estudio_Mascota1_idx",
        using: "BTREE",
        fields: [
          { name: "Mascota_idMascota" },
        ]
      },
      {
        name: "fk_Estudio_Archivo1_idx",
        using: "BTREE",
        fields: [
          { name: "Archivo_idArchivo" },
        ]
      },
      {
        name: "fk_Estudio_Usuario1",
        using: "BTREE",
        fields: [
          { name: "MedicoAsignado" },
        ]
      },
    ]
  });
  }
}
