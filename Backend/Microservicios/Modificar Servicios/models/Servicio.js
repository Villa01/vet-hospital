const { DataTypes } = require ('sequelize');
const { dbConnection } = require ('../database/sequelize');

const Servicio = dbConnection.define('Servicio', {
    idServicio: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    Descripcion: {
        type: DataTypes.STRING,
    },
    Precio: {
        type: DataTypes.DECIMAL,
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
});


module.exports = {Servicio};