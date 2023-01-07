const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Mascota', {
    idMascota: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    foto: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Usuario_idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuario',
        key: 'idUsuario'
      }
    },
    DescripcionMascota_idDescripcionMascota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'DescripcionMascota',
        key: 'idDescripcionMascota'
      }
    }
  }, {
    sequelize,
    tableName: 'Mascota',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idMascota" },
        ]
      },
      {
        name: "fk_Mascota_Usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "Usuario_idUsuario" },
        ]
      },
      {
        name: "fk_Mascota_DescripcionMascota1_idx",
        using: "BTREE",
        fields: [
          { name: "DescripcionMascota_idDescripcionMascota" },
        ]
      },
    ]
  });
};
