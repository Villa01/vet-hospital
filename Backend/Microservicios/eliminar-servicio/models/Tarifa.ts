import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Pago, PagoId } from './Pago';

export interface TarifaAttributes {
  idTarifa: number;
  Motivo: string;
  Precio: number;
}

export type TarifaPk = "idTarifa";
export type TarifaId = Tarifa[TarifaPk];
export type TarifaOptionalAttributes = "idTarifa";
export type TarifaCreationAttributes = Optional<TarifaAttributes, TarifaOptionalAttributes>;

export class Tarifa extends Model<TarifaAttributes, TarifaCreationAttributes> implements TarifaAttributes {
  idTarifa!: number;
  Motivo!: string;
  Precio!: number;

  // Tarifa hasMany Pago via Tarifa_idTarifa
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Tarifa {
    return Tarifa.init({
    idTarifa: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Motivo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Precio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Tarifa',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTarifa" },
        ]
      },
    ]
  });
  }
}
