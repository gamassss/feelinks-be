import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import app from "./app.ts";
import { server_config } from "./config/index.ts";

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const port = server_config.port;

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
