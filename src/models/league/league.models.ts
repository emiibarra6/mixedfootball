import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../utils/sequelize";
import { LeagueInt } from "./interfaces/league.interfaces";

export class LeagueModel extends Model<LeagueInt> {}
LeagueModel.init(
  {
    team_position: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    team_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: "TEAMS",
        key: "team_id",
      },
    },
    team_matches: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
    team_points: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
    team_wins: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
    team_losses: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
    team_draws: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: "LEAGUE",
    timestamps: false,
  }
);
