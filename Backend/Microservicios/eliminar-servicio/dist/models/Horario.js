"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Horario = void 0;
const sequelize_1 = require("sequelize");
class Horario extends sequelize_1.Model {
    static initModel(sequelize) {
        return Horario.init({
            idHorario: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            dia: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            inicio: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: false
            },
            fin: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'Horario',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idHorario" },
                    ]
                },
            ]
        });
    }
}
exports.Horario = Horario;
//# sourceMappingURL=Horario.js.map