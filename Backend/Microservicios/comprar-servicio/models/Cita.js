const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Cita', {
    idCita: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MedicoAsignado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Usuario',
        key: 'idUsuario'
      }
    },
    Horario: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Mascota_idMascota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Mascota',
        key: 'idMascota'
      }
    },
    EstadoCita_idEstadoCita: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EstadoCita',
        key: 'idEstadoCita'
      }
    }
  }, {
    sequelize,
    tableName: 'Cita',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCita" },
        ]
      },
      {
        name: "fk_Cita_Usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "MedicoAsignado" },
        ]
      },
      {
        name: "fk_Cita_Mascota1_idx",
        using: "BTREE",
        fields: [
          { name: "Mascota_idMascota" },
        ]
      },
      {
        name: "fk_Cita_EstadoCita1_idx",
        using: "BTREE",
        fields: [
          { name: "EstadoCita_idEstadoCita" },
        ]
      },
    ]
  });
};
