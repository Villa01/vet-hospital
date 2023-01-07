import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Paquete, PaqueteId } from './Paquete';
import type { Servicio, ServicioId } from './Servicio';

export interface Paquete_has_ServicioAttributes {
  Paquete_idPaquete: number;
  Servicio_idServicio: number;
}

export type Paquete_has_ServicioPk = "Paquete_idPaquete" | "Servicio_idServicio";
export type Paquete_has_ServicioId = Paquete_has_Servicio[Paquete_has_ServicioPk];
export type Paquete_has_ServicioCreationAttributes = Paquete_has_ServicioAttributes;

export class Paquete_has_Servicio extends Model<Paquete_has_ServicioAttributes, Paquete_has_ServicioCreationAttributes> implements Paquete_has_ServicioAttributes {
  Paquete_idPaquete!: number;
  Servicio_idServicio!: number;

  // Paquete_has_Servicio belongsTo Paquete via Paquete_idPaquete
  Paquete_idPaquete_Paquete!: Paquete;
  getPaquete_idPaquete_Paquete!: Sequelize.BelongsToGetAssociationMixin<Paquete>;
  setPaquete_idPaquete_Paquete!: Sequelize.BelongsToSetAssociationMixin<Paquete, PaqueteId>;
  createPaquete_idPaquete_Paquete!: Sequelize.BelongsToCreateAssociationMixin<Paquete>;
  // Paquete_has_Servicio belongsTo Servicio via Servicio_idServicio
  Servicio_idServicio_Servicio!: Servicio;
  getServicio_idServicio_Servicio!: Sequelize.BelongsToGetAssociationMixin<Servicio>;
  setServicio_idServicio_Servicio!: Sequelize.BelongsToSetAssociationMixin<Servicio, ServicioId>;
  createServicio_idServicio_Servicio!: Sequelize.BelongsToCreateAssociationMixin<Servicio>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Paquete_has_Servicio {
    return Paquete_has_Servicio.init({
    Paquete_idPaquete: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Paquete',
        key: 'idPaquete'
      }
    },
    Servicio_idServicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Servicio',
        key: 'idServicio'
      }
    }
  }, {
    sequelize,
    tableName: 'Paquete_has_Servicio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Paquete_idPaquete" },
          { name: "Servicio_idServicio" },
        ]
      },
      {
        name: "fk_Paquete_has_Servicio_Servicio1_idx",
        using: "BTREE",
        fields: [
          { name: "Servicio_idServicio" },
        ]
      },
      {
        name: "fk_Paquete_has_Servicio_Paquete1_idx",
        using: "BTREE",
        fields: [
          { name: "Paquete_idPaquete" },
        ]
      },
    ]
  });
  }
}
