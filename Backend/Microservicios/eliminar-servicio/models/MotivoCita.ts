import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Cita, CitaId } from './Cita';
import type { CitaMotivoCita, CitaMotivoCitaId } from './CitaMotivoCita';

export interface MotivoCitaAttributes {
  idMotivoCita: number;
  Motivo?: string;
}

export type MotivoCitaPk = "idMotivoCita";
export type MotivoCitaId = MotivoCita[MotivoCitaPk];
export type MotivoCitaOptionalAttributes = "idMotivoCita" | "Motivo";
export type MotivoCitaCreationAttributes = Optional<MotivoCitaAttributes, MotivoCitaOptionalAttributes>;

export class MotivoCita extends Model<MotivoCitaAttributes, MotivoCitaCreationAttributes> implements MotivoCitaAttributes {
  idMotivoCita!: number;
  Motivo?: string;

  // MotivoCita belongsToMany Cita via MotivoCita_idMotivoCita and Cita_idCita
  Cita_idCita_Cita!: Cita[];
  getCita_idCita_Cita!: Sequelize.BelongsToManyGetAssociationsMixin<Cita>;
  setCita_idCita_Cita!: Sequelize.BelongsToManySetAssociationsMixin<Cita, CitaId>;
  addCita_idCita_Citum!: Sequelize.BelongsToManyAddAssociationMixin<Cita, CitaId>;
  addCita_idCita_Cita!: Sequelize.BelongsToManyAddAssociationsMixin<Cita, CitaId>;
  createCita_idCita_Citum!: Sequelize.BelongsToManyCreateAssociationMixin<Cita>;
  removeCita_idCita_Citum!: Sequelize.BelongsToManyRemoveAssociationMixin<Cita, CitaId>;
  removeCita_idCita_Cita!: Sequelize.BelongsToManyRemoveAssociationsMixin<Cita, CitaId>;
  hasCita_idCita_Citum!: Sequelize.BelongsToManyHasAssociationMixin<Cita, CitaId>;
  hasCita_idCita_Cita!: Sequelize.BelongsToManyHasAssociationsMixin<Cita, CitaId>;
  countCita_idCita_Cita!: Sequelize.BelongsToManyCountAssociationsMixin;
  // MotivoCita hasMany CitaMotivoCita via MotivoCita_idMotivoCita
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

  static initModel(sequelize: Sequelize.Sequelize): typeof MotivoCita {
    return MotivoCita.init({
    idMotivoCita: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Motivo: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MotivoCita',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idMotivoCita" },
        ]
      },
    ]
  });
  }
}
