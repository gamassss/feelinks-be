import { Router } from "express";
import { signupController } from "../controllers/authController.ts";

const authRouter: Router = Router();

authRouter.post("/signup", signupController);

export default authRouter;
