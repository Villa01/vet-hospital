import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Mascota, MascotaId } from './Mascota';
import type { Medicamento, MedicamentoId } from './Medicamento';
import type { Usuario, UsuarioId } from './Usuario';

export interface RecetaAttributes {
  Mascota_idMascota: number;
  Medicamento_idMedicamento: number;
  MedicoEmisor: number;
}

export type RecetaPk = "Mascota_idMascota" | "Medicamento_idMedicamento" | "MedicoEmisor";
export type RecetaId = Receta[RecetaPk];
export type RecetaCreationAttributes = RecetaAttributes;

export class Receta extends Model<RecetaAttributes, RecetaCreationAttributes> implements RecetaAttributes {
  Mascota_idMascota!: number;
  Medicamento_idMedicamento!: number;
  MedicoEmisor!: number;

  // Receta belongsTo Mascota via Mascota_idMascota
  Mascota_idMascota_Mascotum!: Mascota;
  getMascota_idMascota_Mascotum!: Sequelize.BelongsToGetAssociationMixin<Mascota>;
  setMascota_idMascota_Mascotum!: Sequelize.BelongsToSetAssociationMixin<Mascota, MascotaId>;
  createMascota_idMascota_Mascotum!: Sequelize.BelongsToCreateAssociationMixin<Mascota>;
  // Receta belongsTo Medicamento via Medicamento_idMedicamento
  Medicamento_idMedicamento_Medicamento!: Medicamento;
  getMedicamento_idMedicamento_Medicamento!: Sequelize.BelongsToGetAssociationMixin<Medicamento>;
  setMedicamento_idMedicamento_Medicamento!: Sequelize.BelongsToSetAssociationMixin<Medicamento, MedicamentoId>;
  createMedicamento_idMedicamento_Medicamento!: Sequelize.BelongsToCreateAssociationMixin<Medicamento>;
  // Receta belongsTo Usuario via MedicoEmisor
  MedicoEmisor_Usuario!: Usuario;
  getMedicoEmisor_Usuario!: Sequelize.BelongsToGetAssociationMixin<Usuario>;
  setMedicoEmisor_Usuario!: Sequelize.BelongsToSetAssociationMixin<Usuario, UsuarioId>;
  createMedicoEmisor_Usuario!: Sequelize.BelongsToCreateAssociationMixin<Usuario>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Receta {
    return Receta.init({
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
  }
}
