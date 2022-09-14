require("../src/utils/dotenv");

export default {
  server: {
    port: process.env.PORT,
  },
  database: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    driver: process.env.DB_DRIVER,
    password: process.env.DB_PASSWORD,
  },
  mongodb:{
    url: process.env.DB_MONGO_URL
  },
  jwtConfig:{
    secret: process.env.JWT_SECRET
  }
};
