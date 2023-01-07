const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Receta', {
    Mascota_idMascota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Mascota',
        key: 'idMascota'
      }
    },
    Medicamento_idMedicamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Medicamento',
        key: 'idMedicamento'
      }
    },
    MedicoEmisor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Usuario',
        key: 'idUsuario'
      }
    }
  }, {
    sequelize,
    tableName: 'Receta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Mascota_idMascota" },
          { name: "Medicamento_idMedicamento" },
          { name: "MedicoEmisor" },
        ]
      },
      {
        name: "fk_Mascota_has_Medicamento_Medicamento1_idx",
        using: "BTREE",
        fields: [
          { name: "Medicamento_idMedicamento" },
        ]
      },
      {
        name: "fk_Mascota_has_Medicamento_Mascota1_idx",
        using: "BTREE",
        fields: [
          { name: "Mascota_idMascota" },
        ]
      },
      {
        name: "fk_Receta_Usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "MedicoEmisor" },
        ]
      },
    ]
  });
};
