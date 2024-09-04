export class CustomError extends Error {
  public statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class UsernameAlreadyExistsError extends CustomError {
  constructor() {
    super(409, "Username already exists");
  }
}
