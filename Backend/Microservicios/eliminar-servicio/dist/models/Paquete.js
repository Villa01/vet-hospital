"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paquete = void 0;
const sequelize_1 = require("sequelize");
class Paquete extends sequelize_1.Model {
    static initModel(sequelize) {
        return Paquete.init({
            idPaquete: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            Descripcion: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            Descuento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'Paquete',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idPaquete" },
                    ]
                },
            ]
        });
    }
}
exports.Paquete = Paquete;
//# sourceMappingURL=Paquete.js.map