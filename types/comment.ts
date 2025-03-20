import type { User } from "./user";
import type { Document } from "./document";
import type { Author } from "./author";

export type Comment = {
  id: string;
  content: string;
  Author: Author;
  Document: Document;
  repliesCount: number;
  createdAt: Date;
};
