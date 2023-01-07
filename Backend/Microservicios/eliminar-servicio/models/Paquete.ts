import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Paquete_has_Servicio, Paquete_has_ServicioId } from './Paquete_has_Servicio';
import type { Servicio, ServicioId } from './Servicio';

export interface PaqueteAttributes {
  idPaquete: number;
  Descripcion: string;
  Descuento: number;
}

export type PaquetePk = "idPaquete";
export type PaqueteId = Paquete[PaquetePk];
export type PaqueteOptionalAttributes = "idPaquete";
export type PaqueteCreationAttributes = Optional<PaqueteAttributes, PaqueteOptionalAttributes>;

export class Paquete extends Model<PaqueteAttributes, PaqueteCreationAttributes> implements PaqueteAttributes {
  idPaquete!: number;
  Descripcion!: string;
  Descuento!: number;

  // Paquete hasMany Paquete_has_Servicio via Paquete_idPaquete
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
  // Paquete belongsToMany Servicio via Paquete_idPaquete and Servicio_idServicio
  Servicio_idServicio_Servicios!: Servicio[];
  getServicio_idServicio_Servicios!: Sequelize.BelongsToManyGetAssociationsMixin<Servicio>;
  setServicio_idServicio_Servicios!: Sequelize.BelongsToManySetAssociationsMixin<Servicio, ServicioId>;
  addServicio_idServicio_Servicio!: Sequelize.BelongsToManyAddAssociationMixin<Servicio, ServicioId>;
  addServicio_idServicio_Servicios!: Sequelize.BelongsToManyAddAssociationsMixin<Servicio, ServicioId>;
  createServicio_idServicio_Servicio!: Sequelize.BelongsToManyCreateAssociationMixin<Servicio>;
  removeServicio_idServicio_Servicio!: Sequelize.BelongsToManyRemoveAssociationMixin<Servicio, ServicioId>;
  removeServicio_idServicio_Servicios!: Sequelize.BelongsToManyRemoveAssociationsMixin<Servicio, ServicioId>;
  hasServicio_idServicio_Servicio!: Sequelize.BelongsToManyHasAssociationMixin<Servicio, ServicioId>;
  hasServicio_idServicio_Servicios!: Sequelize.BelongsToManyHasAssociationsMixin<Servicio, ServicioId>;
  countServicio_idServicio_Servicios!: Sequelize.BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Paquete {
    return Paquete.init({
    idPaquete: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Descuento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Paquete',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPaquete" },
        ]
      },
    ]
  });
  }
}
