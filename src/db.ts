import pg from "pg";
import { db_config } from "./config/index.ts";

const pool = new pg.Pool({
  user: db_config.db_user,
  password: db_config.db_password,
  host: db_config.db_host,
  port: db_config.db_port,
  database: db_config.db_name,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
  query_timeout: 10000
});

export default pool;
