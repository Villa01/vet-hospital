import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { EstadoEmergencia, EstadoEmergenciaId } from './EstadoEmergencia';
import type { Mascota, MascotaId } from './Mascota';
import type { Pago, PagoId } from './Pago';
import type { Sala, SalaId } from './Sala';
import type { Usuario, UsuarioId } from './Usuario';

export interface EmergenciaAttributes {
  idEmergencia: number;
  Ingreso: Date;
  Sala_idSala: number;
  Usuario_idUsuario: number;
  Mascota_idMascota: number;
  EstadoEmergencia_idEstadoEmergencia: number;
}

export type EmergenciaPk = "idEmergencia";
export type EmergenciaId = Emergencia[EmergenciaPk];
export type EmergenciaCreationAttributes = EmergenciaAttributes;

export class Emergencia extends Model<EmergenciaAttributes, EmergenciaCreationAttributes> implements EmergenciaAttributes {
  idEmergencia!: number;
  Ingreso!: Date;
  Sala_idSala!: number;
  Usuario_idUsuario!: number;
  Mascota_idMascota!: number;
  EstadoEmergencia_idEstadoEmergencia!: number;

  // Emergencia hasMany Pago via Emergencia_idEmergencia
  Pagos!: Pago[];
  getPagos!: Sequelize.HasManyGetAssociationsMixin<Pago>;
  setPagos!: Sequelize.HasManySetAssociationsMixin<Pago, PagoId>;
  addPago!: Sequelize.HasManyAddAssociationMixin<Pago, PagoId>;
  addPagos!: Sequelize.HasManyAddAssociationsMixin<Pago, PagoId>;
  createPago!: Sequelize.HasManyCreateAssociationMixin<Pago>;
  removePago!: Sequelize.HasManyRemoveAssociationMixin<Pago, PagoId>;
  removePagos!: Sequelize.HasManyRemoveAssociationsMixin<Pago, PagoId>;
  hasPago!: Sequelize.HasManyHasAssociationMixin<Pago, PagoId>;
  hasPagos!: Sequelize.HasManyHasAssociationsMixin<Pago, PagoId>;
  countPagos!: Sequelize.HasManyCountAssociationsMixin;
  // Emergencia belongsTo EstadoEmergencia via EstadoEmergencia_idEstadoEmergencia
  EstadoEmergencia_idEstadoEmergencia_EstadoEmergencium!: EstadoEmergencia;
  getEstadoEmergencia_idEstadoEmergencia_EstadoEmergencium!: Sequelize.BelongsToGetAssociationMixin<EstadoEmergencia>;
  setEstadoEmergencia_idEstadoEmergencia_EstadoEmergencium!: Sequelize.BelongsToSetAssociationMixin<EstadoEmergencia, EstadoEmergenciaId>;
  createEstadoEmergencia_idEstadoEmergencia_EstadoEmergencium!: Sequelize.BelongsToCreateAssociationMixin<EstadoEmergencia>;
  // Emergencia belongsTo Mascota via Mascota_idMascota
  Mascota_idMascota_Mascotum!: Mascota;
  getMascota_idMascota_Mascotum!: Sequelize.BelongsToGetAssociationMixin<Mascota>;
  setMascota_idMascota_Mascotum!: Sequelize.BelongsToSetAssociationMixin<Mascota, MascotaId>;
  createMascota_idMascota_Mascotum!: Sequelize.BelongsToCreateAssociationMixin<Mascota>;
  // Emergencia belongsTo Sala via Sala_idSala
  Sala_idSala_Sala!: Sala;
  getSala_idSala_Sala!: Sequelize.BelongsToGetAssociationMixin<Sala>;
  setSala_idSala_Sala!: Sequelize.BelongsToSetAssociationMixin<Sala, SalaId>;
  createSala_idSala_Sala!: Sequelize.BelongsToCreateAssociationMixin<Sala>;
  // Emergencia belongsTo Usuario via Usuario_idUsuario
  Usuario_idUsuario_Usuario!: Usuario;
  getUsuario_idUsuario_Usuario!: Sequelize.BelongsToGetAssociationMixin<Usuario>;
  setUsuario_idUsuario_Usuario!: Sequelize.BelongsToSetAssociationMixin<Usuario, UsuarioId>;
  createUsuario_idUsuario_Usuario!: Sequelize.BelongsToCreateAssociationMixin<Usuario>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Emergencia {
    return Emergencia.init({
    idEmergencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Ingreso: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Sala_idSala: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Sala',
        key: 'idSala'
      }
    },
    Usuario_idUsuario: {
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
    EstadoEmergencia_idEstadoEmergencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EstadoEmergencia',
        key: 'idEstadoEmergencia'
      }
    }
  }, {
    sequelize,
    tableName: 'Emergencia',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEmergencia" },
        ]
      },
      {
        name: "fk_Emergencia_Sala1_idx",
        using: "BTREE",
        fields: [
          { name: "Sala_idSala" },
        ]
      },
      {
        name: "fk_Emergencia_Usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "Usuario_idUsuario" },
        ]
      },
      {
        name: "fk_Emergencia_Mascota1_idx",
        using: "BTREE",
        fields: [
          { name: "Mascota_idMascota" },
        ]
      },
      {
        name: "fk_Emergencia_EstadoEmergencia1_idx",
        using: "BTREE",
        fields: [
          { name: "EstadoEmergencia_idEstadoEmergencia" },
        ]
      },
    ]
  });
  }
}
