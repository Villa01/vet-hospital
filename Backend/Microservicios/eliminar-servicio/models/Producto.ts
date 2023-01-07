import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Pago, PagoId } from './Pago';
import type { Pago_has_producto, Pago_has_productoId } from './Pago_has_producto';

export interface ProductoAttributes {
  idProducto: number;
  Descripcion: string;
  Precio: number;
  CantidadStock?: number;
}

export type ProductoPk = "idProducto";
export type ProductoId = Producto[ProductoPk];
export type ProductoOptionalAttributes = "idProducto" | "CantidadStock";
export type ProductoCreationAttributes = Optional<ProductoAttributes, ProductoOptionalAttributes>;

export class Producto extends Model<ProductoAttributes, ProductoCreationAttributes> implements ProductoAttributes {
  idProducto!: number;
  Descripcion!: string;
  Precio!: number;
  CantidadStock?: number;

  // Producto belongsToMany Pago via Producto_copy1_idProducto and Pago_idPago
  Pago_idPago_Pagos!: Pago[];
  getPago_idPago_Pagos!: Sequelize.BelongsToManyGetAssociationsMixin<Pago>;
  setPago_idPago_Pagos!: Sequelize.BelongsToManySetAssociationsMixin<Pago, PagoId>;
  addPago_idPago_Pago!: Sequelize.BelongsToManyAddAssociationMixin<Pago, PagoId>;
  addPago_idPago_Pagos!: Sequelize.BelongsToManyAddAssociationsMixin<Pago, PagoId>;
  createPago_idPago_Pago!: Sequelize.BelongsToManyCreateAssociationMixin<Pago>;
  removePago_idPago_Pago!: Sequelize.BelongsToManyRemoveAssociationMixin<Pago, PagoId>;
  removePago_idPago_Pagos!: Sequelize.BelongsToManyRemoveAssociationsMixin<Pago, PagoId>;
  hasPago_idPago_Pago!: Sequelize.BelongsToManyHasAssociationMixin<Pago, PagoId>;
  hasPago_idPago_Pagos!: Sequelize.BelongsToManyHasAssociationsMixin<Pago, PagoId>;
  countPago_idPago_Pagos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Producto hasMany Pago_has_producto via Producto_copy1_idProducto
  Pago_has_productos!: Pago_has_producto[];
  getPago_has_productos!: Sequelize.HasManyGetAssociationsMixin<Pago_has_producto>;
  setPago_has_productos!: Sequelize.HasManySetAssociationsMixin<Pago_has_producto, Pago_has_productoId>;
  addPago_has_producto!: Sequelize.HasManyAddAssociationMixin<Pago_has_producto, Pago_has_productoId>;
  addPago_has_productos!: Sequelize.HasManyAddAssociationsMixin<Pago_has_producto, Pago_has_productoId>;
  createPago_has_producto!: Sequelize.HasManyCreateAssociationMixin<Pago_has_producto>;
  removePago_has_producto!: Sequelize.HasManyRemoveAssociationMixin<Pago_has_producto, Pago_has_productoId>;
  removePago_has_productos!: Sequelize.HasManyRemoveAssociationsMixin<Pago_has_producto, Pago_has_productoId>;
  hasPago_has_producto!: Sequelize.HasManyHasAssociationMixin<Pago_has_producto, Pago_has_productoId>;
  hasPago_has_productos!: Sequelize.HasManyHasAssociationsMixin<Pago_has_producto, Pago_has_productoId>;
  countPago_has_productos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Producto {
    return Producto.init({
    idProducto: {
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
    },
    CantidadStock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Producto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProducto" },
        ]
      },
    ]
  });
  }
}
