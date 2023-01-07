import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Emergencia, EmergenciaId } from './Emergencia';

export interface SalaAttributes {
  idSala: number;
  numero: number;
  nivel: number;
  disponible: number;
}

export type SalaPk = "idSala";
export type SalaId = Sala[SalaPk];
export type SalaOptionalAttributes = "idSala";
export type SalaCreationAttributes = Optional<SalaAttributes, SalaOptionalAttributes>;

export class Sala extends Model<SalaAttributes, SalaCreationAttributes> implements SalaAttributes {
  idSala!: number;
  numero!: number;
  nivel!: number;
  disponible!: number;

  // Sala hasMany Emergencia via Sala_idSala
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Sala {
    return Sala.init({
    idSala: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nivel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    disponible: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Sala',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idSala" },
        ]
      },
    ]
  });
  }
}
