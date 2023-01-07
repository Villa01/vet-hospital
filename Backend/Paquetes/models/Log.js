const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log', {
    idLog: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Metodo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Entrada: {
      type: DataTypes.JSON,
      allowNull: false
    },
    Salida: {
      type: DataTypes.JSON,
      allowNull: false
    },
    EsError: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    FechaHora: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Log',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idLog" },
        ]
      },
    ]
  });
};
