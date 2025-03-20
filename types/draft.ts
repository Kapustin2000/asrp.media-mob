import type { Author } from '@/types/author';
import type { EntityContent } from '@/types/EntityContent';
import type { Media } from './media';
import type { DocumentStatus } from './enums/documentstatus';

export type Draft = {
  id: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  status: DocumentStatus;
  imageMob: Media[];
  imageWeb: Media[];
  slug: string;
  DocumentDraftContents: EntityContent[];
  Authors: Author[];
};
