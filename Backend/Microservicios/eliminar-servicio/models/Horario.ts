import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { HorarioMedico, HorarioMedicoId } from './HorarioMedico';
import type { Usuario, UsuarioId } from './Usuario';

export interface HorarioAttributes {
  idHorario: number;
  dia: string;
  inicio: string;
  fin: string;
}

export type HorarioPk = "idHorario";
export type HorarioId = Horario[HorarioPk];
export type HorarioOptionalAttributes = "idHorario";
export type HorarioCreationAttributes = Optional<HorarioAttributes, HorarioOptionalAttributes>;

export class Horario extends Model<HorarioAttributes, HorarioCreationAttributes> implements HorarioAttributes {
  idHorario!: number;
  dia!: string;
  inicio!: string;
  fin!: string;

  // Horario hasMany HorarioMedico via Horario_idHorario
  HorarioMedicos!: HorarioMedico[];
  getHorarioMedicos!: Sequelize.HasManyGetAssociationsMixin<HorarioMedico>;
  setHorarioMedicos!: Sequelize.HasManySetAssociationsMixin<HorarioMedico, HorarioMedicoId>;
  addHorarioMedico!: Sequelize.HasManyAddAssociationMixin<HorarioMedico, HorarioMedicoId>;
  addHorarioMedicos!: Sequelize.HasManyAddAssociationsMixin<HorarioMedico, HorarioMedicoId>;
  createHorarioMedico!: Sequelize.HasManyCreateAssociationMixin<HorarioMedico>;
  removeHorarioMedico!: Sequelize.HasManyRemoveAssociationMixin<HorarioMedico, HorarioMedicoId>;
  removeHorarioMedicos!: Sequelize.HasManyRemoveAssociationsMixin<HorarioMedico, HorarioMedicoId>;
  hasHorarioMedico!: Sequelize.HasManyHasAssociationMixin<HorarioMedico, HorarioMedicoId>;
  hasHorarioMedicos!: Sequelize.HasManyHasAssociationsMixin<HorarioMedico, HorarioMedicoId>;
  countHorarioMedicos!: Sequelize.HasManyCountAssociationsMixin;
  // Horario belongsToMany Usuario via Horario_idHorario and Usuario_idUsuario
  Usuario_idUsuario_Usuarios!: Usuario[];
  getUsuario_idUsuario_Usuarios!: Sequelize.BelongsToManyGetAssociationsMixin<Usuario>;
  setUsuario_idUsuario_Usuarios!: Sequelize.BelongsToManySetAssociationsMixin<Usuario, UsuarioId>;
  addUsuario_idUsuario_Usuario!: Sequelize.BelongsToManyAddAssociationMixin<Usuario, UsuarioId>;
  addUsuario_idUsuario_Usuarios!: Sequelize.BelongsToManyAddAssociationsMixin<Usuario, UsuarioId>;
  createUsuario_idUsuario_Usuario!: Sequelize.BelongsToManyCreateAssociationMixin<Usuario>;
  removeUsuario_idUsuario_Usuario!: Sequelize.BelongsToManyRemoveAssociationMixin<Usuario, UsuarioId>;
  removeUsuario_idUsuario_Usuarios!: Sequelize.BelongsToManyRemoveAssociationsMixin<Usuario, UsuarioId>;
  hasUsuario_idUsuario_Usuario!: Sequelize.BelongsToManyHasAssociationMixin<Usuario, UsuarioId>;
  hasUsuario_idUsuario_Usuarios!: Sequelize.BelongsToManyHasAssociationsMixin<Usuario, UsuarioId>;
  countUsuario_idUsuario_Usuarios!: Sequelize.BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Horario {
    return Horario.init({
    idHorario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dia: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    inicio: {
      type: DataTypes.TIME,
      allowNull: false
    },
    fin: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Horario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idHorario" },
        ]
      },
    ]
  });
  }
}
