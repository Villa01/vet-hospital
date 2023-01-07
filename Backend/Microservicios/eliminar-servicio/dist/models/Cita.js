"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cita = void 0;
const sequelize_1 = require("sequelize");
class Cita extends sequelize_1.Model {
    static initModel(sequelize) {
        return Cita.init({
            idCita: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            MedicoAsignado: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'Usuario',
                    key: 'idUsuario'
                }
            },
            Horario: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            },
            Mascota_idMascota: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Mascota',
                    key: 'idMascota'
                }
            },
            EstadoCita_idEstadoCita: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'EstadoCita',
                    key: 'idEstadoCita'
                }
            }
        }, {
            sequelize,
            tableName: 'Cita',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idCita" },
                    ]
                },
                {
                    name: "fk_Cita_Usuario1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "MedicoAsignado" },
                    ]
                },
                {
                    name: "fk_Cita_Mascota1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Mascota_idMascota" },
                    ]
                },
                {
                    name: "fk_Cita_EstadoCita1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "EstadoCita_idEstadoCita" },
                    ]
                },
            ]
        });
    }
}
exports.Cita = Cita;
//# sourceMappingURL=Cita.js.map