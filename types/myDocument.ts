import type { EntityContent } from '@/types/EntityContent';
import type { Media } from './media';
import type { Author } from './author';
import type { DocumentType } from './enums/documenttype';

export type MyDocument = {
  id: string;
  title: string;
  description: string;
  seoTitle: string;
  type: DocumentType;
  seoDescription: string;
  slug: string;
  status: string;
  imageWeb: Media[];
  imageMob: Media[];
  DocumentDraftContents: EntityContent[];
  Authors: Author[];
  publishDate: Date;
  likesCount: number;
  commentsCount: number;
};
