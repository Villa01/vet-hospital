const { DataTypes } = require ('sequelize');
const { dbConnection } = require ('../database/sequelize');

const Producto = dbConnection.define('Producto', {
    idProducto: {
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
    },
    CantidadStock: {
        type: DataTypes.INTEGER,
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
});


module.exports = {Producto};