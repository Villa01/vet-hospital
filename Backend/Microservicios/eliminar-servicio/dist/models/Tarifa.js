"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarifa = void 0;
const sequelize_1 = require("sequelize");
class Tarifa extends sequelize_1.Model {
    static initModel(sequelize) {
        return Tarifa.init({
            idTarifa: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            Motivo: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            Precio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
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
exports.Tarifa = Tarifa;
//# sourceMappingURL=Tarifa.js.map