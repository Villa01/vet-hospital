"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paquete_has_Servicio = void 0;
const sequelize_1 = require("sequelize");
class Paquete_has_Servicio extends sequelize_1.Model {
    static initModel(sequelize) {
        return Paquete_has_Servicio.init({
            Paquete_idPaquete: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Paquete',
                    key: 'idPaquete'
                }
            },
            Servicio_idServicio: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Servicio',
                    key: 'idServicio'
                }
            }
        }, {
            sequelize,
            tableName: 'Paquete_has_Servicio',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "Paquete_idPaquete" },
                        { name: "Servicio_idServicio" },
                    ]
                },
                {
                    name: "fk_Paquete_has_Servicio_Servicio1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Servicio_idServicio" },
                    ]
                },
                {
                    name: "fk_Paquete_has_Servicio_Paquete1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Paquete_idPaquete" },
                    ]
                },
            ]
        });
    }
}
exports.Paquete_has_Servicio = Paquete_has_Servicio;
//# sourceMappingURL=Paquete_has_Servicio.js.map