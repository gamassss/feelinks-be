import "./config/dotenv.ts";
import app from "./app.ts";
import { server_config } from "./config/index.ts";

const port = server_config.port;

// Start server and listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.on("error", (e) => {
  console.log(`Server encountered an error ${e}`);
});
