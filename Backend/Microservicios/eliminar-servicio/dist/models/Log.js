"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const sequelize_1 = require("sequelize");
class Log extends sequelize_1.Model {
    static initModel(sequelize) {
        return Log.init({
            idLog: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            Metodo: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            Entrada: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: false
            },
            Salida: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: false
            },
            EsError: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false
            },
            FechaHora: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'Log',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idLog" },
                    ]
                },
            ]
        });
    }
}
exports.Log = Log;
//# sourceMappingURL=Log.js.map