const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Pago_has_producto', {
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
};
