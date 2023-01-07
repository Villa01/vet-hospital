const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Usuario', {
    idUsuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TipoUsuario_idTipoUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TipoUsuario',
        key: 'idTipoUsuario'
      }
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Especialidad_idEspecialidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Especialidad',
        key: 'idEspecialidad'
      }
    },
    Frecuente: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    password: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    nombres: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    apellidos: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    activo: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'Usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idUsuario" },
        ]
      },
      {
        name: "fk_Usuario_TipoUsuario_idx",
        using: "BTREE",
        fields: [
          { name: "TipoUsuario_idTipoUsuario" },
        ]
      },
      {
        name: "fk_Usuario_Especialidad1_idx",
        using: "BTREE",
        fields: [
          { name: "Especialidad_idEspecialidad" },
        ]
      },
    ]
  });
};
