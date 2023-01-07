"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const sequelize_1 = require("sequelize");
class Producto extends sequelize_1.Model {
    static initModel(sequelize) {
        return Producto.init({
            idProducto: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            Descripcion: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            Precio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            CantidadStock: {
                type: sequelize_1.DataTypes.INTEGER,
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
exports.Producto = Producto;
//# sourceMappingURL=Producto.js.map