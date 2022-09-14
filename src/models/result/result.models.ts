import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../utils/sequelize";
import { ResultInt } from "./interfaces/result.interfaces";

export class ResultModel extends Model<ResultInt> {}
ResultModel.init(
  {
    result_id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    match_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: "MATCH",
        key:"match_id",
      }
    },
    local_score: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
    visitor_score: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
    winner_id: {
      type: DataTypes.NUMBER,
      defaultValue: null,
      references: {
        model: "TEAMS",
        key:"team_id",
      }
    },
    draw: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: "RESULT",
    timestamps: false,
  }
);
