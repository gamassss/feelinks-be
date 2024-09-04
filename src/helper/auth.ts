import bcrypt from 'bcrypt'
import { SALT_ROUNDS } from '../constants/security.ts'

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS)
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword;
} 