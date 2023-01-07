"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pago = void 0;
const sequelize_1 = require("sequelize");
class Pago extends sequelize_1.Model {
    static initModel(sequelize) {
        return Pago.init({
            idPago: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            Hora: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            },
            Tarifa_idTarifa: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Tarifa',
                    key: 'idTarifa'
                }
            },
            Cita_idCita: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'Cita',
                    key: 'idCita'
                }
            },
            Emergencia_idEmergencia: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'Emergencia',
                    key: 'idEmergencia'
                }
            },
            Comprobante: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'Archivo',
                    key: 'idArchivo'
                }
            },
            EstadoPago_idEstadoPago: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'EstadoPago',
                    key: 'idEstadoPago'
                }
            },
            TotalAPagar: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'Pago',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idPago" },
                    ]
                },
                {
                    name: "fk_Pago_Tarifa1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Tarifa_idTarifa" },
                    ]
                },
                {
                    name: "fk_Pago_Cita1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Cita_idCita" },
                    ]
                },
                {
                    name: "fk_Pago_Emergencia1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Emergencia_idEmergencia" },
                    ]
                },
                {
                    name: "fk_Pago_Archivo1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Comprobante" },
                    ]
                },
                {
                    name: "fk_Pago_EstadoPago1",
                    using: "BTREE",
                    fields: [
                        { name: "EstadoPago_idEstadoPago" },
                    ]
                },
            ]
        });
    }
}
exports.Pago = Pago;
//# sourceMappingURL=Pago.js.map