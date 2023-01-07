const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Emergencia', {
    idEmergencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Ingreso: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Sala_idSala: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Sala',
        key: 'idSala'
      }
    },
    Usuario_idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuario',
        key: 'idUsuario'
      }
    },
    Mascota_idMascota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Mascota',
        key: 'idMascota'
      }
    },
    EstadoEmergencia_idEstadoEmergencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EstadoEmergencia',
        key: 'idEstadoEmergencia'
      }
    }
  }, {
    sequelize,
    tableName: 'Emergencia',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEmergencia" },
        ]
      },
      {
        name: "fk_Emergencia_Sala1_idx",
        using: "BTREE",
        fields: [
          { name: "Sala_idSala" },
        ]
      },
      {
        name: "fk_Emergencia_Usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "Usuario_idUsuario" },
        ]
      },
      {
        name: "fk_Emergencia_Mascota1_idx",
        using: "BTREE",
        fields: [
          { name: "Mascota_idMascota" },
        ]
      },
      {
        name: "fk_Emergencia_EstadoEmergencia1_idx",
        using: "BTREE",
        fields: [
          { name: "EstadoEmergencia_idEstadoEmergencia" },
        ]
      },
    ]
  });
};
