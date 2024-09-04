import { Request, Response } from "express";
import { sendError, sendSuccess } from "../helper/response.ts";
import { authService } from "../services/authService.ts";
import { UsernameAlreadyExistsError } from "../helper/customError.ts";
import { HTTP_STATUS_CODE } from "../constants/statusCodes.ts";

export const signupController = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const response = await authService(username, password);
    sendSuccess(res, "User Succesfully Create", response);
  } catch (error) {
    if (error instanceof UsernameAlreadyExistsError) {
      sendError(res, HTTP_STATUS_CODE.Conflict, error.message, null);
    } else {
      sendError(res, HTTP_STATUS_CODE.InternalServerError, "An unknown error occurred", null);
    }
  }
};
