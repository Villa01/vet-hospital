"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotivoCita = void 0;
const sequelize_1 = require("sequelize");
class MotivoCita extends sequelize_1.Model {
    static initModel(sequelize) {
        return MotivoCita.init({
            idMotivoCita: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            Motivo: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'MotivoCita',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idMotivoCita" },
                    ]
                },
            ]
        });
    }
}
exports.MotivoCita = MotivoCita;
//# sourceMappingURL=MotivoCita.js.map