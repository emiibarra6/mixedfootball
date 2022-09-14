import { App } from "./src/app";
import { sequelize, sqlConnect } from "./src/utils/sequelize";
import { connectDBMongo } from './src/utils/typegoose'

async function Main() {
  await sqlConnect();
  await connectDBMongo();
  console.log(await sequelize.query("SHOW TABLES"))
  return new App().listen();
}

Main();


