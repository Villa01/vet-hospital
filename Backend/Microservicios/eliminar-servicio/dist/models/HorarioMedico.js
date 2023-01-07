"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorarioMedico = void 0;
const sequelize_1 = require("sequelize");
class HorarioMedico extends sequelize_1.Model {
    static initModel(sequelize) {
        return HorarioMedico.init({
            Usuario_idUsuario: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Usuario',
                    key: 'idUsuario'
                }
            },
            Horario_idHorario: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Horario',
                    key: 'idHorario'
                }
            }
        }, {
            sequelize,
            tableName: 'HorarioMedico',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "Usuario_idUsuario" },
                        { name: "Horario_idHorario" },
                    ]
                },
                {
                    name: "fk_Usuario_has_Horario_Horario1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Horario_idHorario" },
                    ]
                },
                {
                    name: "fk_Usuario_has_Horario_Usuario1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Usuario_idUsuario" },
                    ]
                },
            ]
        });
    }
}
exports.HorarioMedico = HorarioMedico;
//# sourceMappingURL=HorarioMedico.js.map