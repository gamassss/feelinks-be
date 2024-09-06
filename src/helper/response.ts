import { Response } from "express";
import { HTTP_STATUS_CODE } from "../constants/statusCodes.ts";
import { ResponseFormat } from "../types/response.ts";

export const statusText = (statusCode: number): string => {
  switch (statusCode) {
    case HTTP_STATUS_CODE.OK:
      return "Success";
    case HTTP_STATUS_CODE.InternalServerError:
      return "Internal Server Error";
    case HTTP_STATUS_CODE.BadRequest:
      return "Bad Request";
    default:
      return "Unknown Status";
  }
};

export const setSuccessResponse = <T>(code: number, message: string, data: T): ResponseFormat<T> => {
  return {
    success: true,
    code,
    message,
    data
  };
};

export const setErrorResponse = (code: number, message: string, error: string | object[]): ResponseFormat<null> => {
  return {
    success: false,
    code,
    message,
    error
  };
};

export const sendSuccess = <T>(res: Response, message: string, data: T) => {
  const response: ResponseFormat<T> = setSuccessResponse(HTTP_STATUS_CODE.OK, message, data);

  return res.status(HTTP_STATUS_CODE.OK).send(response);
};

export const sendCustomError = (res: Response, code: number, message: string, error: string) => {
  const response: ResponseFormat<null> = setErrorResponse(code, message, error);

  return res.status(code).send(response);
};

export const sendInternalServerError = (res: Response) => {
  const response: ResponseFormat<null> = setErrorResponse(
    HTTP_STATUS_CODE.InternalServerError,
    statusText(HTTP_STATUS_CODE.InternalServerError),
    "An unexpected error occurred"
  );

  return res.status(HTTP_STATUS_CODE.InternalServerError).send(response);
};

export const sendBadRequestError = (res: Response, error: string | object[]) => {
  const response: ResponseFormat<null> = setErrorResponse(
    HTTP_STATUS_CODE.BadRequest,
    statusText(HTTP_STATUS_CODE.BadRequest),
    error
  );

  return res.status(HTTP_STATUS_CODE.BadRequest).send(response);
};
