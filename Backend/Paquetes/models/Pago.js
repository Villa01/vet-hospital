const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Pago', {
    idPago: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Hora: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Tarifa_idTarifa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Tarifa',
        key: 'idTarifa'
      }
    },
    Cita_idCita: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Cita',
        key: 'idCita'
      }
    },
    Emergencia_idEmergencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Emergencia',
        key: 'idEmergencia'
      }
    },
    Comprobante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Archivo',
        key: 'idArchivo'
      }
    },
    EstadoPago_idEstadoPago: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'EstadoPago',
        key: 'idEstadoPago'
      }
    },
    TotalAPagar: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Pago',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPago" },
        ]
      },
      {
        name: "fk_Pago_Tarifa1_idx",
        using: "BTREE",
        fields: [
          { name: "Tarifa_idTarifa" },
        ]
      },
      {
        name: "fk_Pago_Cita1_idx",
        using: "BTREE",
        fields: [
          { name: "Cita_idCita" },
        ]
      },
      {
        name: "fk_Pago_Emergencia1_idx",
        using: "BTREE",
        fields: [
          { name: "Emergencia_idEmergencia" },
        ]
      },
      {
        name: "fk_Pago_Archivo1_idx",
        using: "BTREE",
        fields: [
          { name: "Comprobante" },
        ]
      },
      {
        name: "fk_Pago_EstadoPago1",
        using: "BTREE",
        fields: [
          { name: "EstadoPago_idEstadoPago" },
        ]
      },
    ]
  });
};
