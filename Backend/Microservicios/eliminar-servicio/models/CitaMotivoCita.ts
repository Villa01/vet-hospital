import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Cita, CitaId } from './Cita';
import type { MotivoCita, MotivoCitaId } from './MotivoCita';

export interface CitaMotivoCitaAttributes {
  Cita_idCita: number;
  MotivoCita_idMotivoCita: number;
}

export type CitaMotivoCitaPk = "Cita_idCita" | "MotivoCita_idMotivoCita";
export type CitaMotivoCitaId = CitaMotivoCita[CitaMotivoCitaPk];
export type CitaMotivoCitaCreationAttributes = CitaMotivoCitaAttributes;

export class CitaMotivoCita extends Model<CitaMotivoCitaAttributes, CitaMotivoCitaCreationAttributes> implements CitaMotivoCitaAttributes {
  Cita_idCita!: number;
  MotivoCita_idMotivoCita!: number;

  // CitaMotivoCita belongsTo Cita via Cita_idCita
  Cita_idCita_Citum!: Cita;
  getCita_idCita_Citum!: Sequelize.BelongsToGetAssociationMixin<Cita>;
  setCita_idCita_Citum!: Sequelize.BelongsToSetAssociationMixin<Cita, CitaId>;
  createCita_idCita_Citum!: Sequelize.BelongsToCreateAssociationMixin<Cita>;
  // CitaMotivoCita belongsTo MotivoCita via MotivoCita_idMotivoCita
  MotivoCita_idMotivoCita_MotivoCitum!: MotivoCita;
  getMotivoCita_idMotivoCita_MotivoCitum!: Sequelize.BelongsToGetAssociationMixin<MotivoCita>;
  setMotivoCita_idMotivoCita_MotivoCitum!: Sequelize.BelongsToSetAssociationMixin<MotivoCita, MotivoCitaId>;
  createMotivoCita_idMotivoCita_MotivoCitum!: Sequelize.BelongsToCreateAssociationMixin<MotivoCita>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CitaMotivoCita {
    return CitaMotivoCita.init({
    Cita_idCita: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Cita',
        key: 'idCita'
      }
    },
    MotivoCita_idMotivoCita: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'MotivoCita',
        key: 'idMotivoCita'
      }
    }
  }, {
    sequelize,
    tableName: 'CitaMotivoCita',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Cita_idCita" },
          { name: "MotivoCita_idMotivoCita" },
        ]
      },
      {
        name: "fk_Cita_has_MotivoCita_MotivoCita1_idx",
        using: "BTREE",
        fields: [
          { name: "MotivoCita_idMotivoCita" },
        ]
      },
      {
        name: "fk_Cita_has_MotivoCita_Cita1_idx",
        using: "BTREE",
        fields: [
          { name: "Cita_idCita" },
        ]
      },
    ]
  });
  }
}
