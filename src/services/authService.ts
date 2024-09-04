import { UsernameAlreadyExistsError } from "../helper/customError.ts";
import { hashPassword } from "../helper/auth.ts";
import { createUser, findUserByUsername } from "../models/UserModel.ts";
export const authService = async (username: string, password: string) => {
  const existingUser = await findUserByUsername(username);
  if (existingUser.rows.length > 0) {
    throw new UsernameAlreadyExistsError();
  }

  const hashedPassword = await hashPassword(password)
  const result = createUser(username, hashedPassword);
  return result;
};
