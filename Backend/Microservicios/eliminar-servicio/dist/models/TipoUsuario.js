"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoUsuario = void 0;
const sequelize_1 = require("sequelize");
class TipoUsuario extends sequelize_1.Model {
    static initModel(sequelize) {
        return TipoUsuario.init({
            idTipoUsuario: {
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
            tableName: 'TipoUsuario',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idTipoUsuario" },
                    ]
                },
            ]
        });
    }
}
exports.TipoUsuario = TipoUsuario;
//# sourceMappingURL=TipoUsuario.js.map