import pg from "pg";
import { DatabaseConfig } from "../types/config_types";

const db_config: DatabaseConfig = {
  db_user: process.env.DATABASE_USER || "default_user",
  db_password: process.env.DATABASE_PASSWORD || "default_password",
  db_host: process.env.DATABASE_HOST || "localhost",
  db_port: parseInt(process.env.DATABASE_PORT || "5432", 10),
  db_name: process.env.DATABASE_NAME || "default_database"
};

const pool = new pg.Pool({
  user: db_config.db_user,
  password: db_config.db_password,
  host: db_config.db_host,
  port: db_config.db_port,
  database: db_config.db_name,
  max: 10,
  idleTimeoutMillis: 30000
});

export default pool;
