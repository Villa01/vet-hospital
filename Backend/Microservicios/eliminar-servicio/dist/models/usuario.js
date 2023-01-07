"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
class Usuario extends sequelize_1.Model {
    static initModel(sequelize) {
        return Usuario.init({
            idUsuario: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            TipoUsuario_idTipoUsuario: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'TipoUsuario',
                    key: 'idTipoUsuario'
                }
            },
            Email: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false
            },
            Especialidad_idEspecialidad: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'Especialidad',
                    key: 'idEspecialidad'
                }
            },
            Frecuente: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            password: {
                type: sequelize_1.DataTypes.STRING(80),
                allowNull: false
            },
            nombres: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false
            },
            apellidos: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false
            },
            telefono: {
                type: sequelize_1.DataTypes.STRING(8),
                allowNull: true
            },
            activo: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 1
            }
        }, {
            sequelize,
            tableName: 'Usuario',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idUsuario" },
                    ]
                },
                {
                    name: "fk_Usuario_TipoUsuario_idx",
                    using: "BTREE",
                    fields: [
                        { name: "TipoUsuario_idTipoUsuario" },
                    ]
                },
                {
                    name: "fk_Usuario_Especialidad1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Especialidad_idEspecialidad" },
                    ]
                },
            ]
        });
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=Usuario.js.map