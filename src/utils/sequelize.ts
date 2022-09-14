import { Sequelize } from "sequelize";
import config from "config";
import { databaseConfigType } from "../types/config.types";
import logger from "./logger";

const env = config.get<databaseConfigType>("database");

export const sequelize = new Sequelize({
  database: env.name,
  username: env.user,
  host: env.host,
  password: env.password,
  dialect: "mysql",
});

export async function sqlConnect() {
  try {
    await sequelize.sync();
    logger.debug.info("Sequelize connected");
  } catch (error) {
    logger.file.error("Connection failed", error);
  }
}

