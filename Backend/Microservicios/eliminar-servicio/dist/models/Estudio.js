"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudio = void 0;
const sequelize_1 = require("sequelize");
class Estudio extends sequelize_1.Model {
    static initModel(sequelize) {
        return Estudio.init({
            idEstudio: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            MedicoAsignado: {
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
            Archivo_idArchivo: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Archivo',
                    key: 'idArchivo'
                }
            }
        }, {
            sequelize,
            tableName: 'Estudio',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idEstudio" },
                    ]
                },
                {
                    name: "fk_Estudio_Mascota1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Mascota_idMascota" },
                    ]
                },
                {
                    name: "fk_Estudio_Archivo1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Archivo_idArchivo" },
                    ]
                },
                {
                    name: "fk_Estudio_Usuario1",
                    using: "BTREE",
                    fields: [
                        { name: "MedicoAsignado" },
                    ]
                },
            ]
        });
    }
}
exports.Estudio = Estudio;
//# sourceMappingURL=Estudio.js.map