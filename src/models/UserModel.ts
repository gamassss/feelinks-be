import pool from "../db.ts";
import { User } from "../types/user";

export const findUserByUsername = (username: User["username"]) => {
  return pool.query("SELECT * FROM users where username = $1", [username]);
};

export const createUser = async (username: User["username"], password: User["password"]): Promise<User> => {
  const result = await pool.query("INSERT INTO users (username, password) values ($1, $2) RETURNING *", [
    username,
    password
  ]);

  return result.rows[0];
};
