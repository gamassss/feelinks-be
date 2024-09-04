import express from "express";
import cors from "cors";
import { authRouter } from "./routes/index.ts";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/auth", authRouter)

export default app;
