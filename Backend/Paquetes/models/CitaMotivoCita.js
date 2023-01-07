const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CitaMotivoCita', {
    Cita_idCita: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Cita',
        key: 'idCita'
      }
    },
    MotivoCita_idMotivoCita: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'MotivoCita',
        key: 'idMotivoCita'
      }
    }
  }, {
    sequelize,
    tableName: 'CitaMotivoCita',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Cita_idCita" },
          { name: "MotivoCita_idMotivoCita" },
        ]
      },
      {
        name: "fk_Cita_has_MotivoCita_MotivoCita1_idx",
        using: "BTREE",
        fields: [
          { name: "MotivoCita_idMotivoCita" },
        ]
      },
      {
        name: "fk_Cita_has_MotivoCita_Cita1_idx",
        using: "BTREE",
        fields: [
          { name: "Cita_idCita" },
        ]
      },
    ]
  });
};
