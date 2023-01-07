"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoEmergencia = void 0;
const sequelize_1 = require("sequelize");
class EstadoEmergencia extends sequelize_1.Model {
    static initModel(sequelize) {
        return EstadoEmergencia.init({
            idEstadoEmergencia: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            Descripcion: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'EstadoEmergencia',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idEstadoEmergencia" },
                    ]
                },
            ]
        });
    }
}
exports.EstadoEmergencia = EstadoEmergencia;
//# sourceMappingURL=EstadoEmergencia.js.map