import dotenv from "dotenv";
// Local environment variables
dotenv.config({
  path: "./env/.env.local",
});

export default dotenv;
