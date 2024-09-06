import { Request, Response } from "express";
import { plainToClass } from "class-transformer";

import { CreateUserDTO, CreateUserResponseDTO } from "../dto/user.dto.ts";
import { authService } from "../services/authService.ts";
import { UsernameAlreadyExistsError } from "../helper/customError.ts";
import { HTTP_STATUS_CODE } from "../constants/statusCodes.ts";
import { sendBadRequestError, sendCustomError, sendInternalServerError, sendSuccess } from "../helper/response.ts";
import { validate } from "class-validator";

export const signupController = async (req: Request, res: Response) => {
  try {
    const createUserDto = plainToClass(CreateUserDTO, req.body);
    const errors = await validate(createUserDto);

    if (errors.length > 0) {
      return sendBadRequestError(
        res,
        errors.map(err => ({
          property: err.property,
          constraints: err.constraints
        }))
      );
    }

    const { username, password } = req.body;
    const user = await authService(username, password);
    const userResponse = plainToClass(CreateUserResponseDTO, user);

    sendSuccess(res, "User Successfully Created", userResponse);
  } catch (error) {
    if (error instanceof UsernameAlreadyExistsError) {
      return sendCustomError(res, HTTP_STATUS_CODE.Conflict, error.message, "Username already taken");
    }

    return sendInternalServerError(res);
  }
};
