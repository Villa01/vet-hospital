import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Usuario, UsuarioId } from './Usuario';

export interface TipoUsuarioAttributes {
  idTipoUsuario: number;
  Nombre: string;
}

export type TipoUsuarioPk = "idTipoUsuario";
export type TipoUsuarioId = TipoUsuario[TipoUsuarioPk];
export type TipoUsuarioOptionalAttributes = "idTipoUsuario";
export type TipoUsuarioCreationAttributes = Optional<TipoUsuarioAttributes, TipoUsuarioOptionalAttributes>;

export class TipoUsuario extends Model<TipoUsuarioAttributes, TipoUsuarioCreationAttributes> implements TipoUsuarioAttributes {
  idTipoUsuario!: number;
  Nombre!: string;

  // TipoUsuario hasMany Usuario via TipoUsuario_idTipoUsuario
  Usuarios!: Usuario[];
  getUsuarios!: Sequelize.HasManyGetAssociationsMixin<Usuario>;
  setUsuarios!: Sequelize.HasManySetAssociationsMixin<Usuario, UsuarioId>;
  addUsuario!: Sequelize.HasManyAddAssociationMixin<Usuario, UsuarioId>;
  addUsuarios!: Sequelize.HasManyAddAssociationsMixin<Usuario, UsuarioId>;
  createUsuario!: Sequelize.HasManyCreateAssociationMixin<Usuario>;
  removeUsuario!: Sequelize.HasManyRemoveAssociationMixin<Usuario, UsuarioId>;
  removeUsuarios!: Sequelize.HasManyRemoveAssociationsMixin<Usuario, UsuarioId>;
  hasUsuario!: Sequelize.HasManyHasAssociationMixin<Usuario, UsuarioId>;
  hasUsuarios!: Sequelize.HasManyHasAssociationsMixin<Usuario, UsuarioId>;
  countUsuarios!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof TipoUsuario {
    return TipoUsuario.init({
    idTipoUsuario: {
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
    tableName: 'TipoUsuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTipoUsuario" },
        ]
      },
    ]
  });
  }
}
