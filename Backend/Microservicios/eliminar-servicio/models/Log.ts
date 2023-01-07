import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface LogAttributes {
  idLog: number;
  Metodo: string;
  Entrada: object;
  Salida: object;
  EsError: number;
  FechaHora: Date;
}

export type LogPk = "idLog";
export type LogId = Log[LogPk];
export type LogOptionalAttributes = "idLog";
export type LogCreationAttributes = Optional<LogAttributes, LogOptionalAttributes>;

export class Log extends Model<LogAttributes, LogCreationAttributes> implements LogAttributes {
  idLog!: number;
  Metodo!: string;
  Entrada!: object;
  Salida!: object;
  EsError!: number;
  FechaHora!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Log {
    return Log.init({
    idLog: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Metodo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Entrada: {
      type: DataTypes.JSON,
      allowNull: false
    },
    Salida: {
      type: DataTypes.JSON,
      allowNull: false
    },
    EsError: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    FechaHora: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Log',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idLog" },
        ]
      },
    ]
  });
  }
}
