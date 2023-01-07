import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Mascota, MascotaId } from './Mascota';

export interface DescripcionMascotaAttributes {
  idDescripcionMascota: number;
  TipoAnimal: string;
  raza?: string;
}

export type DescripcionMascotaPk = "idDescripcionMascota";
export type DescripcionMascotaId = DescripcionMascota[DescripcionMascotaPk];
export type DescripcionMascotaOptionalAttributes = "idDescripcionMascota" | "raza";
export type DescripcionMascotaCreationAttributes = Optional<DescripcionMascotaAttributes, DescripcionMascotaOptionalAttributes>;

export class DescripcionMascota extends Model<DescripcionMascotaAttributes, DescripcionMascotaCreationAttributes> implements DescripcionMascotaAttributes {
  idDescripcionMascota!: number;
  TipoAnimal!: string;
  raza?: string;

  // DescripcionMascota hasMany Mascota via DescripcionMascota_idDescripcionMascota
  Mascota!: Mascota[];
  getMascota!: Sequelize.HasManyGetAssociationsMixin<Mascota>;
  setMascota!: Sequelize.HasManySetAssociationsMixin<Mascota, MascotaId>;
  addMascotum!: Sequelize.HasManyAddAssociationMixin<Mascota, MascotaId>;
  addMascota!: Sequelize.HasManyAddAssociationsMixin<Mascota, MascotaId>;
  createMascotum!: Sequelize.HasManyCreateAssociationMixin<Mascota>;
  removeMascotum!: Sequelize.HasManyRemoveAssociationMixin<Mascota, MascotaId>;
  removeMascota!: Sequelize.HasManyRemoveAssociationsMixin<Mascota, MascotaId>;
  hasMascotum!: Sequelize.HasManyHasAssociationMixin<Mascota, MascotaId>;
  hasMascota!: Sequelize.HasManyHasAssociationsMixin<Mascota, MascotaId>;
  countMascota!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DescripcionMascota {
    return DescripcionMascota.init({
    idDescripcionMascota: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TipoAnimal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    raza: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DescripcionMascota',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idDescripcionMascota" },
        ]
      },
    ]
  });
  }
}
