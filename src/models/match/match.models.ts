import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../utils/sequelize";
import { MatchInt } from "./interfaces/match.interfaces";

export class MatchModel extends Model<MatchInt> {}
MatchModel.init(
  {
    match_id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    match_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    local_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: "TEAMS",
        key: "team_id",
      },
    },
    visitor_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: "TEAMS",
        key: "team_id",
      },
    },
    result_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: "RESULT",
        key: "result_id",
      },
    },
  },
  {
    sequelize,
    tableName: "MATCH",
    timestamps: false,
  }
);
