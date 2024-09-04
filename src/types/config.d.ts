export interface ServerConfig {
  port: number;
}

export interface DatabaseConfig {
  db_user: string;
  db_password: string;
  db_host: string;
  db_port: number;
  db_name: string;
}
