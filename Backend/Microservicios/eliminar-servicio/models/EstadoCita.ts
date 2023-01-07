import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Cita, CitaId } from './Cita';

export interface EstadoCitaAttributes {
  idEstadoCita: number;
  Decripcion: string;
}

export type EstadoCitaPk = "idEstadoCita";
export type EstadoCitaId = EstadoCita[EstadoCitaPk];
export type EstadoCitaOptionalAttributes = "idEstadoCita";
export type EstadoCitaCreationAttributes = Optional<EstadoCitaAttributes, EstadoCitaOptionalAttributes>;

export class EstadoCita extends Model<EstadoCitaAttributes, EstadoCitaCreationAttributes> implements EstadoCitaAttributes {
  idEstadoCita!: number;
  Decripcion!: string;

  // EstadoCita hasMany Cita via EstadoCita_idEstadoCita
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

  static initModel(sequelize: Sequelize.Sequelize): typeof EstadoCita {
    return EstadoCita.init({
    idEstadoCita: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Decripcion: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'EstadoCita',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEstadoCita" },
        ]
      },
    ]
  });
  }
}
