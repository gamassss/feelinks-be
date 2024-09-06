import { Request, Response } from "express";
import { plainToClass } from "class-transformer";

import { CreateUserDTO, CreateUserResponseDTO } from "../dto/user.dto.ts";
import { authService } from "../services/authService.ts";
import { UsernameAlreadyExistsError } from "../helper/customError.ts";
import { HTTP_STATUS_CODE } from "../constants/statusCodes.ts";
import { sendError, sendSuccess } from "../helper/response.ts";
import { validateRequestDTO } from "../middlewares/validation.ts";

export const signupController = [
  validateRequestDTO(CreateUserDTO),

  async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const user = await authService(username, password);
      const userResponse = plainToClass(CreateUserResponseDTO, user);

      sendSuccess(res, "User Successfully Created", userResponse);
    } catch (error) {
      if (error instanceof UsernameAlreadyExistsError) {
        sendError(res, HTTP_STATUS_CODE.Conflict, error.message, null);
      } else {
        sendError(res, HTTP_STATUS_CODE.InternalServerError, "An unknown error occurred", null);
      }
    }
  }
];
