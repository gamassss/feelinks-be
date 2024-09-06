import pool from "../db.ts";
import { CreateUserResponseDTO } from "../dto/user.dto.ts";

export const findUserByUsername = (username: string) => {
  return pool.query("SELECT * FROM users WHERE username = $1", [username]);
};

export const createUser = async (username: string, password: string): Promise<CreateUserResponseDTO> => {
  const result = await pool.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *", [
    username,
    password
  ]);

  return {
    id: result.rows[0].id,
    username,
    createdAt: result.rows[0].createdAt
  };
};
