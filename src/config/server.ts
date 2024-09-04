import { ServerConfig } from "../types/config_types";

const server_config: ServerConfig = {
  port: parseInt(process.env.APP_PORT || "3000", 10)
};

export default server_config;
