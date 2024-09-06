import { hashPassword } from "../helper/auth.ts";
import { createUser, findUserByUsername } from "../models/UserModel.ts";
import { CreateUserResponseDTO } from "../dto/user.dto.ts";
import { UsernameAlreadyExistsError } from "../helper/customError.ts";

export const authService = async (username: string, password: string): Promise<CreateUserResponseDTO> => {
  const existingUser = await findUserByUsername(username);

  if (existingUser.rows.length > 0) {
    throw new UsernameAlreadyExistsError();
  }

  const hashedPassword = await hashPassword(password);
  const result = await createUser(username, hashedPassword);

  return result;
};
