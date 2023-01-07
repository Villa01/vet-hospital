import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Pago, PagoId } from './Pago';
import type { Producto, ProductoId } from './Producto';

export interface Pago_has_productoAttributes {
  Pago_idPago: number;
  Producto_copy1_idProducto: number;
}

export type Pago_has_productoPk = "Pago_idPago" | "Producto_copy1_idProducto";
export type Pago_has_productoId = Pago_has_producto[Pago_has_productoPk];
export type Pago_has_productoCreationAttributes = Pago_has_productoAttributes;

export class Pago_has_producto extends Model<Pago_has_productoAttributes, Pago_has_productoCreationAttributes> implements Pago_has_productoAttributes {
  Pago_idPago!: number;
  Producto_copy1_idProducto!: number;

  // Pago_has_producto belongsTo Pago via Pago_idPago
  Pago_idPago_Pago!: Pago;
  getPago_idPago_Pago!: Sequelize.BelongsToGetAssociationMixin<Pago>;
  setPago_idPago_Pago!: Sequelize.BelongsToSetAssociationMixin<Pago, PagoId>;
  createPago_idPago_Pago!: Sequelize.BelongsToCreateAssociationMixin<Pago>;
  // Pago_has_producto belongsTo Producto via Producto_copy1_idProducto
  Producto_copy1_idProducto_Producto!: Producto;
  getProducto_copy1_idProducto_Producto!: Sequelize.BelongsToGetAssociationMixin<Producto>;
  setProducto_copy1_idProducto_Producto!: Sequelize.BelongsToSetAssociationMixin<Producto, ProductoId>;
  createProducto_copy1_idProducto_Producto!: Sequelize.BelongsToCreateAssociationMixin<Producto>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Pago_has_producto {
    return Pago_has_producto.init({
    Pago_idPago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Pago',
        key: 'idPago'
      }
    },
    Producto_copy1_idProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Producto',
        key: 'idProducto'
      }
    }
  }, {
    sequelize,
    tableName: 'Pago_has_producto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Pago_idPago" },
          { name: "Producto_copy1_idProducto" },
        ]
      },
      {
        name: "fk_Pago_has_Producto_copy1_Producto_copy11_idx",
        using: "BTREE",
        fields: [
          { name: "Producto_copy1_idProducto" },
        ]
      },
      {
        name: "fk_Pago_has_Producto_copy1_Pago1_idx",
        using: "BTREE",
        fields: [
          { name: "Pago_idPago" },
        ]
      },
    ]
  });
  }
}
