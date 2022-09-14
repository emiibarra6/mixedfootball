import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../utils/sequelize";
import { TeamsInt } from "./interfaces/teams.interfaces";

export class TeamModel extends Model<TeamsInt> {}
TeamModel.init(
  {
    team_id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    team_name: {
      type: new DataTypes.STRING(20),
      allowNull: false,
    },
    players_quantity: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "TEAMS",
    timestamps: false,
  }
);
