import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Paquete, PaqueteId } from './Paquete';
import type { Paquete_has_Servicio, Paquete_has_ServicioId } from './Paquete_has_Servicio';

export interface ServicioAttributes {
  idServicio: number;
  Descripcion: string;
  Precio: number;
}

export type ServicioPk = "idServicio";
export type ServicioId = Servicio[ServicioPk];
export type ServicioOptionalAttributes = "idServicio";
export type ServicioCreationAttributes = Optional<ServicioAttributes, ServicioOptionalAttributes>;

export class Servicio extends Model<ServicioAttributes, ServicioCreationAttributes> implements ServicioAttributes {
  idServicio!: number;
  Descripcion!: string;
  Precio!: number;

  // Servicio belongsToMany Paquete via Servicio_idServicio and Paquete_idPaquete
  Paquete_idPaquete_Paquetes!: Paquete[];
  getPaquete_idPaquete_Paquetes!: Sequelize.BelongsToManyGetAssociationsMixin<Paquete>;
  setPaquete_idPaquete_Paquetes!: Sequelize.BelongsToManySetAssociationsMixin<Paquete, PaqueteId>;
  addPaquete_idPaquete_Paquete!: Sequelize.BelongsToManyAddAssociationMixin<Paquete, PaqueteId>;
  addPaquete_idPaquete_Paquetes!: Sequelize.BelongsToManyAddAssociationsMixin<Paquete, PaqueteId>;
  createPaquete_idPaquete_Paquete!: Sequelize.BelongsToManyCreateAssociationMixin<Paquete>;
  removePaquete_idPaquete_Paquete!: Sequelize.BelongsToManyRemoveAssociationMixin<Paquete, PaqueteId>;
  removePaquete_idPaquete_Paquetes!: Sequelize.BelongsToManyRemoveAssociationsMixin<Paquete, PaqueteId>;
  hasPaquete_idPaquete_Paquete!: Sequelize.BelongsToManyHasAssociationMixin<Paquete, PaqueteId>;
  hasPaquete_idPaquete_Paquetes!: Sequelize.BelongsToManyHasAssociationsMixin<Paquete, PaqueteId>;
  countPaquete_idPaquete_Paquetes!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Servicio hasMany Paquete_has_Servicio via Servicio_idServicio
  Paquete_has_Servicios!: Paquete_has_Servicio[];
  getPaquete_has_Servicios!: Sequelize.HasManyGetAssociationsMixin<Paquete_has_Servicio>;
  setPaquete_has_Servicios!: Sequelize.HasManySetAssociationsMixin<Paquete_has_Servicio, Paquete_has_ServicioId>;
  addPaquete_has_Servicio!: Sequelize.HasManyAddAssociationMixin<Paquete_has_Servicio, Paquete_has_ServicioId>;
  addPaquete_has_Servicios!: Sequelize.HasManyAddAssociationsMixin<Paquete_has_Servicio, Paquete_has_ServicioId>;
  createPaquete_has_Servicio!: Sequelize.HasManyCreateAssociationMixin<Paquete_has_Servicio>;
  removePaquete_has_Servicio!: Sequelize.HasManyRemoveAssociationMixin<Paquete_has_Servicio, Paquete_has_ServicioId>;
  removePaquete_has_Servicios!: Sequelize.HasManyRemoveAssociationsMixin<Paquete_has_Servicio, Paquete_has_ServicioId>;
  hasPaquete_has_Servicio!: Sequelize.HasManyHasAssociationMixin<Paquete_has_Servicio, Paquete_has_ServicioId>;
  hasPaquete_has_Servicios!: Sequelize.HasManyHasAssociationsMixin<Paquete_has_Servicio, Paquete_has_ServicioId>;
  countPaquete_has_Servicios!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Servicio {
    return Servicio.init({
    idServicio: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Precio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Servicio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idServicio" },
        ]
      },
    ]
  });
  }
}
