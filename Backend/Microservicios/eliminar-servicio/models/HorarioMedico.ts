import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Horario, HorarioId } from './Horario';
import type { Usuario, UsuarioId } from './Usuario';

export interface HorarioMedicoAttributes {
  Usuario_idUsuario: number;
  Horario_idHorario: number;
}

export type HorarioMedicoPk = "Usuario_idUsuario" | "Horario_idHorario";
export type HorarioMedicoId = HorarioMedico[HorarioMedicoPk];
export type HorarioMedicoCreationAttributes = HorarioMedicoAttributes;

export class HorarioMedico extends Model<HorarioMedicoAttributes, HorarioMedicoCreationAttributes> implements HorarioMedicoAttributes {
  Usuario_idUsuario!: number;
  Horario_idHorario!: number;

  // HorarioMedico belongsTo Horario via Horario_idHorario
  Horario_idHorario_Horario!: Horario;
  getHorario_idHorario_Horario!: Sequelize.BelongsToGetAssociationMixin<Horario>;
  setHorario_idHorario_Horario!: Sequelize.BelongsToSetAssociationMixin<Horario, HorarioId>;
  createHorario_idHorario_Horario!: Sequelize.BelongsToCreateAssociationMixin<Horario>;
  // HorarioMedico belongsTo Usuario via Usuario_idUsuario
  Usuario_idUsuario_Usuario!: Usuario;
  getUsuario_idUsuario_Usuario!: Sequelize.BelongsToGetAssociationMixin<Usuario>;
  setUsuario_idUsuario_Usuario!: Sequelize.BelongsToSetAssociationMixin<Usuario, UsuarioId>;
  createUsuario_idUsuario_Usuario!: Sequelize.BelongsToCreateAssociationMixin<Usuario>;

  static initModel(sequelize: Sequelize.Sequelize): typeof HorarioMedico {
    return HorarioMedico.init({
    Usuario_idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Usuario',
        key: 'idUsuario'
      }
    },
    Horario_idHorario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Horario',
        key: 'idHorario'
      }
    }
  }, {
    sequelize,
    tableName: 'HorarioMedico',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Usuario_idUsuario" },
          { name: "Horario_idHorario" },
        ]
      },
      {
        name: "fk_Usuario_has_Horario_Horario1_idx",
        using: "BTREE",
        fields: [
          { name: "Horario_idHorario" },
        ]
      },
      {
        name: "fk_Usuario_has_Horario_Usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "Usuario_idUsuario" },
        ]
      },
    ]
  });
  }
}
