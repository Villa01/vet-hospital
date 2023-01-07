const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Horario', {
    idHorario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dia: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    inicio: {
      type: DataTypes.TIME,
      allowNull: false
    },
    fin: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Horario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idHorario" },
        ]
      },
    ]
  });
};
