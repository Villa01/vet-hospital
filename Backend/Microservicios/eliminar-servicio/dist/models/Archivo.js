"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archivo = void 0;
const sequelize_1 = require("sequelize");
class Archivo extends sequelize_1.Model {
    static initModel(sequelize) {
        return Archivo.init({
            idArchivo: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            url: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'Archivo',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idArchivo" },
                    ]
                },
            ]
        });
    }
}
exports.Archivo = Archivo;
//# sourceMappingURL=Archivo.js.map