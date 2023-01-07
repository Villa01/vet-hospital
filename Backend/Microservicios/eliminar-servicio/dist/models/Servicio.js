"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicio = void 0;
const sequelize_1 = require("sequelize");
class Servicio extends sequelize_1.Model {
    static initModel(sequelize) {
        return Servicio.init({
            idServicio: {
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
            }
        }, {
            sequelize,
            tableName: 'Servicio',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
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
exports.Servicio = Servicio;
//# sourceMappingURL=Servicio.js.map