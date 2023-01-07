"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receta = void 0;
const sequelize_1 = require("sequelize");
class Receta extends sequelize_1.Model {
    static initModel(sequelize) {
        return Receta.init({
            Mascota_idMascota: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Mascota',
                    key: 'idMascota'
                }
            },
            Medicamento_idMedicamento: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Medicamento',
                    key: 'idMedicamento'
                }
            },
            MedicoEmisor: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Usuario',
                    key: 'idUsuario'
                }
            }
        }, {
            sequelize,
            tableName: 'Receta',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "Mascota_idMascota" },
                        { name: "Medicamento_idMedicamento" },
                        { name: "MedicoEmisor" },
                    ]
                },
                {
                    name: "fk_Mascota_has_Medicamento_Medicamento1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Medicamento_idMedicamento" },
                    ]
                },
                {
                    name: "fk_Mascota_has_Medicamento_Mascota1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Mascota_idMascota" },
                    ]
                },
                {
                    name: "fk_Receta_Usuario1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "MedicoEmisor" },
                    ]
                },
            ]
        });
    }
}
exports.Receta = Receta;
//# sourceMappingURL=Receta.js.map