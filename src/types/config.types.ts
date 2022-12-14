import { Url } from "url";

export type serverConfigType = {
  port: string;
};

export type databaseConfigType = {
  name: string;
  user: string;
  host: string;
  driver: string;
  password: string;
};

export type dbMongoUrl = {
  url: string;
};

export type jwtConfig = {
  secret:string;
}

