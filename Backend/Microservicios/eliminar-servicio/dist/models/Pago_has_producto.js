"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pago_has_producto = void 0;
const sequelize_1 = require("sequelize");
class Pago_has_producto extends sequelize_1.Model {
    static initModel(sequelize) {
        return Pago_has_producto.init({
            Pago_idPago: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Pago',
                    key: 'idPago'
                }
            },
            Producto_copy1_idProducto: {
                type: sequelize_1.DataTypes.INTEGER,
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
exports.Pago_has_producto = Pago_has_producto;
//# sourceMappingURL=Pago_has_producto.js.map