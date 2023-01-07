const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HorarioMedico', {
    Usuario_idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Usuario',
        key: 'idUsuario'
      }
    },
    Horario_idHorario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Horario',
        key: 'idHorario'
      }
    }
  }, {
    sequelize,
    tableName: 'HorarioMedico',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Usuario_idUsuario" },
          { name: "Horario_idHorario" },
        ]
      },
      {
        name: "fk_Usuario_has_Horario_Horario1_idx",
        using: "BTREE",
        fields: [
          { name: "Horario_idHorario" },
        ]
      },
      {
        name: "fk_Usuario_has_Horario_Usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "Usuario_idUsuario" },
        ]
      },
    ]
  });
};
