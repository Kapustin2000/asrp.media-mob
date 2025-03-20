import type { Language } from '@/types/language';
import type { Author } from '@/types/author';

export type EntityContent = {
  id: string;
  Language: Language;
  content: string;
  Author: Author;
  createdAt: Date;
};
