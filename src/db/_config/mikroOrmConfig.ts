import { Options } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import entities from "../index";
import "reflect-metadata";

const mikroOrmConfig: Options<PostgreSqlDriver> = {
  entities,
  type: "postgresql",
  dbName: process.env.DB_NAME || "postgres",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "password",
  host: process.env.DB_HOST || "db",
  port: Number(process.env.DB_PORT) || 5432,
  migrations: {
    pathTs: "./migrations",
  },
};

export default mikroOrmConfig;
