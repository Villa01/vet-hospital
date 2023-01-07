const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Estudio', {
    idEstudio: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MedicoAsignado: {
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
    Archivo_idArchivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Archivo',
        key: 'idArchivo'
      }
    }
  }, {
    sequelize,
    tableName: 'Estudio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEstudio" },
        ]
      },
      {
        name: "fk_Estudio_Mascota1_idx",
        using: "BTREE",
        fields: [
          { name: "Mascota_idMascota" },
        ]
      },
      {
        name: "fk_Estudio_Archivo1_idx",
        using: "BTREE",
        fields: [
          { name: "Archivo_idArchivo" },
        ]
      },
      {
        name: "fk_Estudio_Usuario1",
        using: "BTREE",
        fields: [
          { name: "MedicoAsignado" },
        ]
      },
    ]
  });
};
