"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoPago = void 0;
const sequelize_1 = require("sequelize");
class EstadoPago extends sequelize_1.Model {
    static initModel(sequelize) {
        return EstadoPago.init({
            idEstadoPago: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            Descripcion: {
                type: sequelize_1.DataTypes.STRING(50),
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
exports.EstadoPago = EstadoPago;
//# sourceMappingURL=EstadoPago.js.map