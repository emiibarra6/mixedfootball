import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../utils/sequelize";
import { GenderInt } from "./interfaces/gender.interfaces";

export class GenderModel extends Model<GenderInt> {}
GenderModel.init(
  {
    gender_id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    gender_type: {
      type: new DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "GENDER",
    timestamps: false,
  }
);
