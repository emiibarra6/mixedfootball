import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../utils/sequelize";
import { FixtureInt } from "./interfaces/fixture.interfaces";

export class FixtureModel extends Model<FixtureInt> {}
FixtureModel.init(
  {
    match_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: "MATCH",
        key: "match_id",
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
    winner_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "FIXTURE",
    timestamps: false,
  }
);
