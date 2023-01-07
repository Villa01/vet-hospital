import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CitaMotivoCita, CitaMotivoCitaId } from './CitaMotivoCita';
import type { EstadoCita, EstadoCitaId } from './EstadoCita';
import type { Mascota, MascotaId } from './Mascota';
import type { MotivoCita, MotivoCitaId } from './MotivoCita';
import type { Pago, PagoId } from './Pago';
import type { Usuario, UsuarioId } from './Usuario';

export interface CitaAttributes {
  idCita: number;
  MedicoAsignado?: number;
  Horario: Date;
  Mascota_idMascota: number;
  EstadoCita_idEstadoCita: number;
}

export type CitaPk = "idCita";
export type CitaId = Cita[CitaPk];
export type CitaOptionalAttributes = "idCita" | "MedicoAsignado";
export type CitaCreationAttributes = Optional<CitaAttributes, CitaOptionalAttributes>;

export class Cita extends Model<CitaAttributes, CitaCreationAttributes> implements CitaAttributes {
  idCita!: number;
  MedicoAsignado?: number;
  Horario!: Date;
  Mascota_idMascota!: number;
  EstadoCita_idEstadoCita!: number;

  // Cita hasMany CitaMotivoCita via Cita_idCita
  CitaMotivoCita!: CitaMotivoCita[];
  getCitaMotivoCita!: Sequelize.HasManyGetAssociationsMixin<CitaMotivoCita>;
  setCitaMotivoCita!: Sequelize.HasManySetAssociationsMixin<CitaMotivoCita, CitaMotivoCitaId>;
  addCitaMotivoCitum!: Sequelize.HasManyAddAssociationMixin<CitaMotivoCita, CitaMotivoCitaId>;
  addCitaMotivoCita!: Sequelize.HasManyAddAssociationsMixin<CitaMotivoCita, CitaMotivoCitaId>;
  createCitaMotivoCitum!: Sequelize.HasManyCreateAssociationMixin<CitaMotivoCita>;
  removeCitaMotivoCitum!: Sequelize.HasManyRemoveAssociationMixin<CitaMotivoCita, CitaMotivoCitaId>;
  removeCitaMotivoCita!: Sequelize.HasManyRemoveAssociationsMixin<CitaMotivoCita, CitaMotivoCitaId>;
  hasCitaMotivoCitum!: Sequelize.HasManyHasAssociationMixin<CitaMotivoCita, CitaMotivoCitaId>;
  hasCitaMotivoCita!: Sequelize.HasManyHasAssociationsMixin<CitaMotivoCita, CitaMotivoCitaId>;
  countCitaMotivoCita!: Sequelize.HasManyCountAssociationsMixin;
  // Cita belongsToMany MotivoCita via Cita_idCita and MotivoCita_idMotivoCita
  MotivoCita_idMotivoCita_MotivoCita!: MotivoCita[];
  getMotivoCita_idMotivoCita_MotivoCita!: Sequelize.BelongsToManyGetAssociationsMixin<MotivoCita>;
  setMotivoCita_idMotivoCita_MotivoCita!: Sequelize.BelongsToManySetAssociationsMixin<MotivoCita, MotivoCitaId>;
  addMotivoCita_idMotivoCita_MotivoCitum!: Sequelize.BelongsToManyAddAssociationMixin<MotivoCita, MotivoCitaId>;
  addMotivoCita_idMotivoCita_MotivoCita!: Sequelize.BelongsToManyAddAssociationsMixin<MotivoCita, MotivoCitaId>;
  createMotivoCita_idMotivoCita_MotivoCitum!: Sequelize.BelongsToManyCreateAssociationMixin<MotivoCita>;
  removeMotivoCita_idMotivoCita_MotivoCitum!: Sequelize.BelongsToManyRemoveAssociationMixin<MotivoCita, MotivoCitaId>;
  removeMotivoCita_idMotivoCita_MotivoCita!: Sequelize.BelongsToManyRemoveAssociationsMixin<MotivoCita, MotivoCitaId>;
  hasMotivoCita_idMotivoCita_MotivoCitum!: Sequelize.BelongsToManyHasAssociationMixin<MotivoCita, MotivoCitaId>;
  hasMotivoCita_idMotivoCita_MotivoCita!: Sequelize.BelongsToManyHasAssociationsMixin<MotivoCita, MotivoCitaId>;
  countMotivoCita_idMotivoCita_MotivoCita!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Cita hasMany Pago via Cita_idCita
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
  // Cita belongsTo EstadoCita via EstadoCita_idEstadoCita
  EstadoCita_idEstadoCita_EstadoCitum!: EstadoCita;
  getEstadoCita_idEstadoCita_EstadoCitum!: Sequelize.BelongsToGetAssociationMixin<EstadoCita>;
  setEstadoCita_idEstadoCita_EstadoCitum!: Sequelize.BelongsToSetAssociationMixin<EstadoCita, EstadoCitaId>;
  createEstadoCita_idEstadoCita_EstadoCitum!: Sequelize.BelongsToCreateAssociationMixin<EstadoCita>;
  // Cita belongsTo Mascota via Mascota_idMascota
  Mascota_idMascota_Mascotum!: Mascota;
  getMascota_idMascota_Mascotum!: Sequelize.BelongsToGetAssociationMixin<Mascota>;
  setMascota_idMascota_Mascotum!: Sequelize.BelongsToSetAssociationMixin<Mascota, MascotaId>;
  createMascota_idMascota_Mascotum!: Sequelize.BelongsToCreateAssociationMixin<Mascota>;
  // Cita belongsTo Usuario via MedicoAsignado
  MedicoAsignado_Usuario!: Usuario;
  getMedicoAsignado_Usuario!: Sequelize.BelongsToGetAssociationMixin<Usuario>;
  setMedicoAsignado_Usuario!: Sequelize.BelongsToSetAssociationMixin<Usuario, UsuarioId>;
  createMedicoAsignado_Usuario!: Sequelize.BelongsToCreateAssociationMixin<Usuario>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Cita {
    return Cita.init({
    idCita: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MedicoAsignado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Usuario',
        key: 'idUsuario'
      }
    },
    Horario: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Mascota_idMascota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Mascota',
        key: 'idMascota'
      }
    },
    EstadoCita_idEstadoCita: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EstadoCita',
        key: 'idEstadoCita'
      }
    }
  }, {
    sequelize,
    tableName: 'Cita',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCita" },
        ]
      },
      {
        name: "fk_Cita_Usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "MedicoAsignado" },
        ]
      },
      {
        name: "fk_Cita_Mascota1_idx",
        using: "BTREE",
        fields: [
          { name: "Mascota_idMascota" },
        ]
      },
      {
        name: "fk_Cita_EstadoCita1_idx",
        using: "BTREE",
        fields: [
          { name: "EstadoCita_idEstadoCita" },
        ]
      },
    ]
  });
  }
}
