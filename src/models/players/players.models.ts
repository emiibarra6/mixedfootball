import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../utils/sequelize";
import { PlayersInt } from "./interfaces/players.interfaces";

export class PlayersModel extends Model<PlayersInt> {}
PlayersModel.init(
  {
    player_id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    player_name: {
      type: new DataTypes.STRING(10),
      allowNull: false,
    },
    gender_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: "GENDER",
        key: "gender_id",
      },
    },
    team_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: "TEAMS",
        key: "team_id",
      },
    },
  },
  {
    sequelize,
    tableName: "PLAYERS",
    timestamps: false,
  }
);
