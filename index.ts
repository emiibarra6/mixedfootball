import { App } from "./src/app";
import { sequelize, sqlConnect } from "./src/utils/sequelize";

async function Main() {
  await sqlConnect();
  console.log(await sequelize.query("SHOW TABLES"))
  return new App().listen();
}

Main();


