"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoCita = void 0;
const sequelize_1 = require("sequelize");
class EstadoCita extends sequelize_1.Model {
    static initModel(sequelize) {
        return EstadoCita.init({
            idEstadoCita: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            Decripcion: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'EstadoCita',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idEstadoCita" },
                    ]
                },
            ]
        });
    }
}
exports.EstadoCita = EstadoCita;
//# sourceMappingURL=EstadoCita.js.map