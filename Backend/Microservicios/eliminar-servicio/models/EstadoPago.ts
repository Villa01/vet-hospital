import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Pago, PagoId } from './Pago';

export interface EstadoPagoAttributes {
  idEstadoPago: number;
  Descripcion?: string;
}

export type EstadoPagoPk = "idEstadoPago";
export type EstadoPagoId = EstadoPago[EstadoPagoPk];
export type EstadoPagoOptionalAttributes = "idEstadoPago" | "Descripcion";
export type EstadoPagoCreationAttributes = Optional<EstadoPagoAttributes, EstadoPagoOptionalAttributes>;

export class EstadoPago extends Model<EstadoPagoAttributes, EstadoPagoCreationAttributes> implements EstadoPagoAttributes {
  idEstadoPago!: number;
  Descripcion?: string;

  // EstadoPago hasMany Pago via EstadoPago_idEstadoPago
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

  static initModel(sequelize: Sequelize.Sequelize): typeof EstadoPago {
    return EstadoPago.init({
    idEstadoPago: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EstadoPago',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEstadoPago" },
        ]
      },
    ]
  });
  }
}
