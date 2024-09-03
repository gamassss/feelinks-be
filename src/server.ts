import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import app from "./app.ts";

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const port = process.env.APP_PORT || "3000";

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
