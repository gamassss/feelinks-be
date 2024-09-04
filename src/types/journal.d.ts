import { User } from "./user";

export interface Journal {
  journal_id: number;
  title: string;
  content?: string;
  created_at: Date;
  author_id: number;
  author?: User;
}