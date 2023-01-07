"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sala = void 0;
const sequelize_1 = require("sequelize");
class Sala extends sequelize_1.Model {
    static initModel(sequelize) {
        return Sala.init({
            idSala: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            numero: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            nivel: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            disponible: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'Sala',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idSala" },
                    ]
                },
            ]
        });
    }
}
exports.Sala = Sala;
//# sourceMappingURL=Sala.js.map