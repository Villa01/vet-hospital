"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicios = void 0;
const sequelize_1 = require("sequelize");
class Servicios extends sequelize_1.Model {
    static initModel(sequelize) {
        return Servicios.init({
            idServicio: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            Descripcion: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            Precio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'Servicios',
            timestamps: true,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idServicio" },
                    ]
                },
                {
                    name: "idServicio",
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
exports.Servicios = Servicios;
//# sourceMappingURL=Servicios.js.map