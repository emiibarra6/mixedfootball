import log4js from "log4js";

log4js.configure({
  appenders: {
    console: { type: "console" },
    sequelize: { type: "file", filename: "logs/application.log" },
  },
  categories: {
    default: { appenders: ["console"], level: "debug" },
    both: { appenders: ["sequelize", "console"], level: "info" },
  },
});

export default {
  file: log4js.getLogger("both"),
  debug: log4js.getLogger(),
};
