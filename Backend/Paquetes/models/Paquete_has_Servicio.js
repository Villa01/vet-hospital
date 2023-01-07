const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Paquete_has_Servicio', {
    Paquete_idPaquete: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Paquete',
        key: 'idPaquete'
      }
    },
    Servicio_idServicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Servicio',
        key: 'idServicio'
      }
    }
  }, {
    sequelize,
    tableName: 'Paquete_has_Servicio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Paquete_idPaquete" },
          { name: "Servicio_idServicio" },
        ]
      },
      {
        name: "fk_Paquete_has_Servicio_Servicio1_idx",
        using: "BTREE",
        fields: [
          { name: "Servicio_idServicio" },
        ]
      },
      {
        name: "fk_Paquete_has_Servicio_Paquete1_idx",
        using: "BTREE",
        fields: [
          { name: "Paquete_idPaquete" },
        ]
      },
    ]
  });
};
