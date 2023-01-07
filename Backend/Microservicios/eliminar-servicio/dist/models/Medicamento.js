"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medicamento = void 0;
const sequelize_1 = require("sequelize");
class Medicamento extends sequelize_1.Model {
    static initModel(sequelize) {
        return Medicamento.init({
            idMedicamento: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            Nombre: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'Medicamento',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idMedicamento" },
                    ]
                },
            ]
        });
    }
}
exports.Medicamento = Medicamento;
//# sourceMappingURL=Medicamento.js.map