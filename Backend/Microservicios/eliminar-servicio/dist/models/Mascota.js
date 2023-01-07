"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mascota = void 0;
const sequelize_1 = require("sequelize");
class Mascota extends sequelize_1.Model {
    static initModel(sequelize) {
        return Mascota.init({
            idMascota: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            edad: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            foto: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false
            },
            Usuario_idUsuario: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Usuario',
                    key: 'idUsuario'
                }
            },
            DescripcionMascota_idDescripcionMascota: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'DescripcionMascota',
                    key: 'idDescripcionMascota'
                }
            }
        }, {
            sequelize,
            tableName: 'Mascota',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idMascota" },
                    ]
                },
                {
                    name: "fk_Mascota_Usuario1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Usuario_idUsuario" },
                    ]
                },
                {
                    name: "fk_Mascota_DescripcionMascota1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "DescripcionMascota_idDescripcionMascota" },
                    ]
                },
            ]
        });
    }
}
exports.Mascota = Mascota;
//# sourceMappingURL=Mascota.js.map