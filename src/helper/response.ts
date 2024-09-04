import { Response } from "express";
import { HTTP_STATUS_CODE } from "../constants/statusCodes.ts";
import { ResponseFormat } from "../types/response";

export const statusText = (statusCode: number): string => {
  switch (statusCode) {
    case HTTP_STATUS_CODE.OK:
      return "Success";
    case HTTP_STATUS_CODE.InternalServerError:
      return "Internal Server Error";
    default:
      return "Unknown Status";
  }
};

export const setResponse = <T>(code: number, message: string, data: T): ResponseFormat<T> => {
  return {
    code,
    message,
    data
  };
};

export const sendSuccess = <T>(res: Response, message: string, data: T) => {
  const response: ResponseFormat<T> = setResponse(HTTP_STATUS_CODE.OK, message, data);
  
  return res.status(HTTP_STATUS_CODE.OK).send(response);
};

export const sendError = <T>(res: Response, code: number, message: string, data: T) => {
  const response: ResponseFormat<T> = setResponse(code, message, data);

  return res.status(code).send(response);
};
