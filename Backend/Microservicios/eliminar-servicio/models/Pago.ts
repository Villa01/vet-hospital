import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Archivo, ArchivoId } from './Archivo';
import type { Cita, CitaId } from './Cita';
import type { Emergencia, EmergenciaId } from './Emergencia';
import type { EstadoPago, EstadoPagoId } from './EstadoPago';
import type { Pago_has_producto, Pago_has_productoId } from './Pago_has_producto';
import type { Producto, ProductoId } from './Producto';
import type { Tarifa, TarifaId } from './Tarifa';

export interface PagoAttributes {
  idPago: number;
  Hora: Date;
  Tarifa_idTarifa: number;
  Cita_idCita?: number;
  Emergencia_idEmergencia?: number;
  Comprobante?: number;
  EstadoPago_idEstadoPago?: number;
  TotalAPagar?: number;
}

export type PagoPk = "idPago";
export type PagoId = Pago[PagoPk];
export type PagoOptionalAttributes = "idPago" | "Cita_idCita" | "Emergencia_idEmergencia" | "Comprobante" | "EstadoPago_idEstadoPago" | "TotalAPagar";
export type PagoCreationAttributes = Optional<PagoAttributes, PagoOptionalAttributes>;

export class Pago extends Model<PagoAttributes, PagoCreationAttributes> implements PagoAttributes {
  idPago!: number;
  Hora!: Date;
  Tarifa_idTarifa!: number;
  Cita_idCita?: number;
  Emergencia_idEmergencia?: number;
  Comprobante?: number;
  EstadoPago_idEstadoPago?: number;
  TotalAPagar?: number;

  // Pago belongsTo Archivo via Comprobante
  Comprobante_Archivo!: Archivo;
  getComprobante_Archivo!: Sequelize.BelongsToGetAssociationMixin<Archivo>;
  setComprobante_Archivo!: Sequelize.BelongsToSetAssociationMixin<Archivo, ArchivoId>;
  createComprobante_Archivo!: Sequelize.BelongsToCreateAssociationMixin<Archivo>;
  // Pago belongsTo Cita via Cita_idCita
  Cita_idCita_Citum!: Cita;
  getCita_idCita_Citum!: Sequelize.BelongsToGetAssociationMixin<Cita>;
  setCita_idCita_Citum!: Sequelize.BelongsToSetAssociationMixin<Cita, CitaId>;
  createCita_idCita_Citum!: Sequelize.BelongsToCreateAssociationMixin<Cita>;
  // Pago belongsTo Emergencia via Emergencia_idEmergencia
  Emergencia_idEmergencia_Emergencium!: Emergencia;
  getEmergencia_idEmergencia_Emergencium!: Sequelize.BelongsToGetAssociationMixin<Emergencia>;
  setEmergencia_idEmergencia_Emergencium!: Sequelize.BelongsToSetAssociationMixin<Emergencia, EmergenciaId>;
  createEmergencia_idEmergencia_Emergencium!: Sequelize.BelongsToCreateAssociationMixin<Emergencia>;
  // Pago belongsTo EstadoPago via EstadoPago_idEstadoPago
  EstadoPago_idEstadoPago_EstadoPago!: EstadoPago;
  getEstadoPago_idEstadoPago_EstadoPago!: Sequelize.BelongsToGetAssociationMixin<EstadoPago>;
  setEstadoPago_idEstadoPago_EstadoPago!: Sequelize.BelongsToSetAssociationMixin<EstadoPago, EstadoPagoId>;
  createEstadoPago_idEstadoPago_EstadoPago!: Sequelize.BelongsToCreateAssociationMixin<EstadoPago>;
  // Pago hasMany Pago_has_producto via Pago_idPago
  Pago_has_productos!: Pago_has_producto[];
  getPago_has_productos!: Sequelize.HasManyGetAssociationsMixin<Pago_has_producto>;
  setPago_has_productos!: Sequelize.HasManySetAssociationsMixin<Pago_has_producto, Pago_has_productoId>;
  addPago_has_producto!: Sequelize.HasManyAddAssociationMixin<Pago_has_producto, Pago_has_productoId>;
  addPago_has_productos!: Sequelize.HasManyAddAssociationsMixin<Pago_has_producto, Pago_has_productoId>;
  createPago_has_producto!: Sequelize.HasManyCreateAssociationMixin<Pago_has_producto>;
  removePago_has_producto!: Sequelize.HasManyRemoveAssociationMixin<Pago_has_producto, Pago_has_productoId>;
  removePago_has_productos!: Sequelize.HasManyRemoveAssociationsMixin<Pago_has_producto, Pago_has_productoId>;
  hasPago_has_producto!: Sequelize.HasManyHasAssociationMixin<Pago_has_producto, Pago_has_productoId>;
  hasPago_has_productos!: Sequelize.HasManyHasAssociationsMixin<Pago_has_producto, Pago_has_productoId>;
  countPago_has_productos!: Sequelize.HasManyCountAssociationsMixin;
  // Pago belongsToMany Producto via Pago_idPago and Producto_copy1_idProducto
  Producto_copy1_idProducto_Productos!: Producto[];
  getProducto_copy1_idProducto_Productos!: Sequelize.BelongsToManyGetAssociationsMixin<Producto>;
  setProducto_copy1_idProducto_Productos!: Sequelize.BelongsToManySetAssociationsMixin<Producto, ProductoId>;
  addProducto_copy1_idProducto_Producto!: Sequelize.BelongsToManyAddAssociationMixin<Producto, ProductoId>;
  addProducto_copy1_idProducto_Productos!: Sequelize.BelongsToManyAddAssociationsMixin<Producto, ProductoId>;
  createProducto_copy1_idProducto_Producto!: Sequelize.BelongsToManyCreateAssociationMixin<Producto>;
  removeProducto_copy1_idProducto_Producto!: Sequelize.BelongsToManyRemoveAssociationMixin<Producto, ProductoId>;
  removeProducto_copy1_idProducto_Productos!: Sequelize.BelongsToManyRemoveAssociationsMixin<Producto, ProductoId>;
  hasProducto_copy1_idProducto_Producto!: Sequelize.BelongsToManyHasAssociationMixin<Producto, ProductoId>;
  hasProducto_copy1_idProducto_Productos!: Sequelize.BelongsToManyHasAssociationsMixin<Producto, ProductoId>;
  countProducto_copy1_idProducto_Productos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Pago belongsTo Tarifa via Tarifa_idTarifa
  Tarifa_idTarifa_Tarifa!: Tarifa;
  getTarifa_idTarifa_Tarifa!: Sequelize.BelongsToGetAssociationMixin<Tarifa>;
  setTarifa_idTarifa_Tarifa!: Sequelize.BelongsToSetAssociationMixin<Tarifa, TarifaId>;
  createTarifa_idTarifa_Tarifa!: Sequelize.BelongsToCreateAssociationMixin<Tarifa>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Pago {
    return Pago.init({
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
      allowNull: false,
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
  }
}
