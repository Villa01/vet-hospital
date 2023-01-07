import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Receta, RecetaId } from './Receta';

export interface MedicamentoAttributes {
  idMedicamento: number;
  Nombre: string;
}

export type MedicamentoPk = "idMedicamento";
export type MedicamentoId = Medicamento[MedicamentoPk];
export type MedicamentoOptionalAttributes = "idMedicamento";
export type MedicamentoCreationAttributes = Optional<MedicamentoAttributes, MedicamentoOptionalAttributes>;

export class Medicamento extends Model<MedicamentoAttributes, MedicamentoCreationAttributes> implements MedicamentoAttributes {
  idMedicamento!: number;
  Nombre!: string;

  // Medicamento hasMany Receta via Medicamento_idMedicamento
  Receta!: Receta[];
  getReceta!: Sequelize.HasManyGetAssociationsMixin<Receta>;
  setReceta!: Sequelize.HasManySetAssociationsMixin<Receta, RecetaId>;
  addRecetum!: Sequelize.HasManyAddAssociationMixin<Receta, RecetaId>;
  addReceta!: Sequelize.HasManyAddAssociationsMixin<Receta, RecetaId>;
  createRecetum!: Sequelize.HasManyCreateAssociationMixin<Receta>;
  removeRecetum!: Sequelize.HasManyRemoveAssociationMixin<Receta, RecetaId>;
  removeReceta!: Sequelize.HasManyRemoveAssociationsMixin<Receta, RecetaId>;
  hasRecetum!: Sequelize.HasManyHasAssociationMixin<Receta, RecetaId>;
  hasReceta!: Sequelize.HasManyHasAssociationsMixin<Receta, RecetaId>;
  countReceta!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Medicamento {
    return Medicamento.init({
    idMedicamento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Medicamento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idMedicamento" },
        ]
      },
    ]
  });
  }
}
