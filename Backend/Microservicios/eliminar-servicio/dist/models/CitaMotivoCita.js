"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitaMotivoCita = void 0;
const sequelize_1 = require("sequelize");
class CitaMotivoCita extends sequelize_1.Model {
    static initModel(sequelize) {
        return CitaMotivoCita.init({
            Cita_idCita: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Cita',
                    key: 'idCita'
                }
            },
            MotivoCita_idMotivoCita: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'MotivoCita',
                    key: 'idMotivoCita'
                }
            }
        }, {
            sequelize,
            tableName: 'CitaMotivoCita',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "Cita_idCita" },
                        { name: "MotivoCita_idMotivoCita" },
                    ]
                },
                {
                    name: "fk_Cita_has_MotivoCita_MotivoCita1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "MotivoCita_idMotivoCita" },
                    ]
                },
                {
                    name: "fk_Cita_has_MotivoCita_Cita1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Cita_idCita" },
                    ]
                },
            ]
        });
    }
}
exports.CitaMotivoCita = CitaMotivoCita;
//# sourceMappingURL=CitaMotivoCita.js.map