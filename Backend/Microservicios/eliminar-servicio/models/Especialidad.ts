import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Usuario, UsuarioId } from './Usuario';

export interface EspecialidadAttributes {
  idEspecialidad: number;
  nombre: string;
}

export type EspecialidadPk = "idEspecialidad";
export type EspecialidadId = Especialidad[EspecialidadPk];
export type EspecialidadOptionalAttributes = "idEspecialidad";
export type EspecialidadCreationAttributes = Optional<EspecialidadAttributes, EspecialidadOptionalAttributes>;

export class Especialidad extends Model<EspecialidadAttributes, EspecialidadCreationAttributes> implements EspecialidadAttributes {
  idEspecialidad!: number;
  nombre!: string;

  // Especialidad hasMany Usuario via Especialidad_idEspecialidad
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Especialidad {
    return Especialidad.init({
    idEspecialidad: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Especialidad',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEspecialidad" },
        ]
      },
    ]
  });
  }
}
