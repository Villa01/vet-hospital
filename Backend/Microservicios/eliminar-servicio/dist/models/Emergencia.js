"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emergencia = void 0;
const sequelize_1 = require("sequelize");
class Emergencia extends sequelize_1.Model {
    static initModel(sequelize) {
        return Emergencia.init({
            idEmergencia: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            Ingreso: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            },
            Sala_idSala: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Sala',
                    key: 'idSala'
                }
            },
            Usuario_idUsuario: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Usuario',
                    key: 'idUsuario'
                }
            },
            Mascota_idMascota: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Mascota',
                    key: 'idMascota'
                }
            },
            EstadoEmergencia_idEstadoEmergencia: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'EstadoEmergencia',
                    key: 'idEstadoEmergencia'
                }
            }
        }, {
            sequelize,
            tableName: 'Emergencia',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idEmergencia" },
                    ]
                },
                {
                    name: "fk_Emergencia_Sala1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Sala_idSala" },
                    ]
                },
                {
                    name: "fk_Emergencia_Usuario1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Usuario_idUsuario" },
                    ]
                },
                {
                    name: "fk_Emergencia_Mascota1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Mascota_idMascota" },
                    ]
                },
                {
                    name: "fk_Emergencia_EstadoEmergencia1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "EstadoEmergencia_idEstadoEmergencia" },
                    ]
                },
            ]
        });
    }
}
exports.Emergencia = Emergencia;
//# sourceMappingURL=Emergencia.js.map