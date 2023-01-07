import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Estudio, EstudioId } from './Estudio';
import type { Pago, PagoId } from './Pago';

export interface ArchivoAttributes {
  idArchivo: number;
  url: string;
}

export type ArchivoPk = "idArchivo";
export type ArchivoId = Archivo[ArchivoPk];
export type ArchivoOptionalAttributes = "idArchivo";
export type ArchivoCreationAttributes = Optional<ArchivoAttributes, ArchivoOptionalAttributes>;

export class Archivo extends Model<ArchivoAttributes, ArchivoCreationAttributes> implements ArchivoAttributes {
  idArchivo!: number;
  url!: string;

  // Archivo hasMany Estudio via Archivo_idArchivo
  Estudios!: Estudio[];
  getEstudios!: Sequelize.HasManyGetAssociationsMixin<Estudio>;
  setEstudios!: Sequelize.HasManySetAssociationsMixin<Estudio, EstudioId>;
  addEstudio!: Sequelize.HasManyAddAssociationMixin<Estudio, EstudioId>;
  addEstudios!: Sequelize.HasManyAddAssociationsMixin<Estudio, EstudioId>;
  createEstudio!: Sequelize.HasManyCreateAssociationMixin<Estudio>;
  removeEstudio!: Sequelize.HasManyRemoveAssociationMixin<Estudio, EstudioId>;
  removeEstudios!: Sequelize.HasManyRemoveAssociationsMixin<Estudio, EstudioId>;
  hasEstudio!: Sequelize.HasManyHasAssociationMixin<Estudio, EstudioId>;
  hasEstudios!: Sequelize.HasManyHasAssociationsMixin<Estudio, EstudioId>;
  countEstudios!: Sequelize.HasManyCountAssociationsMixin;
  // Archivo hasMany Pago via Comprobante
  Pagos!: Pago[];
  getPagos!: Sequelize.HasManyGetAssociationsMixin<Pago>;
  setPagos!: Sequelize.HasManySetAssociationsMixin<Pago, PagoId>;
  addPago!: Sequelize.HasManyAddAssociationMixin<Pago, PagoId>;
  addPagos!: Sequelize.HasManyAddAssociationsMixin<Pago, PagoId>;
  createPago!: Sequelize.HasManyCreateAssociationMixin<Pago>;
  removePago!: Sequelize.HasManyRemoveAssociationMixin<Pago, PagoId>;
  removePagos!: Sequelize.HasManyRemoveAssociationsMixin<Pago, PagoId>;
  hasPago!: Sequelize.HasManyHasAssociationMixin<Pago, PagoId>;
  hasPagos!: Sequelize.HasManyHasAssociationsMixin<Pago, PagoId>;
  countPagos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Archivo {
    return Archivo.init({
    idArchivo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Archivo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idArchivo" },
        ]
      },
    ]
  });
  }
}
