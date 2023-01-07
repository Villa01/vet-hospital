const {DataTypes:dt} = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Paquete', {
    idPaquete: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Descuento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    Eliminado: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  }, {
    sequelize,
    tableName: 'Paquete',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPaquete" },
        ]
      },
    ]
  });
};
