"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescripcionMascota = void 0;
const sequelize_1 = require("sequelize");
class DescripcionMascota extends sequelize_1.Model {
    static initModel(sequelize) {
        return DescripcionMascota.init({
            idDescripcionMascota: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            TipoAnimal: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            raza: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'DescripcionMascota',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idDescripcionMascota" },
                    ]
                },
            ]
        });
    }
}
exports.DescripcionMascota = DescripcionMascota;
//# sourceMappingURL=DescripcionMascota.js.map