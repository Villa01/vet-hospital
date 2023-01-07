import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Emergencia, EmergenciaId } from './Emergencia';

export interface EstadoEmergenciaAttributes {
  idEstadoEmergencia: number;
  Descripcion: string;
}

export type EstadoEmergenciaPk = "idEstadoEmergencia";
export type EstadoEmergenciaId = EstadoEmergencia[EstadoEmergenciaPk];
export type EstadoEmergenciaOptionalAttributes = "idEstadoEmergencia";
export type EstadoEmergenciaCreationAttributes = Optional<EstadoEmergenciaAttributes, EstadoEmergenciaOptionalAttributes>;

export class EstadoEmergencia extends Model<EstadoEmergenciaAttributes, EstadoEmergenciaCreationAttributes> implements EstadoEmergenciaAttributes {
  idEstadoEmergencia!: number;
  Descripcion!: string;

  // EstadoEmergencia hasMany Emergencia via EstadoEmergencia_idEstadoEmergencia
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

  static initModel(sequelize: Sequelize.Sequelize): typeof EstadoEmergencia {
    return EstadoEmergencia.init({
    idEstadoEmergencia: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'EstadoEmergencia',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEstadoEmergencia" },
        ]
      },
    ]
  });
  }
}
