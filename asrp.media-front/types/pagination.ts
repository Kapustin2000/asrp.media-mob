import type { Document } from '@/types/document';
import type { Author } from '@/types/author';
import type { MyDocument } from './myDocument';

export type Pagination = {
  total: number;
  page: number;
  perPage: number;
};

export type DocumentResponse = {
  Documents: Document[];
  Pagination: Pagination;
};

export type MyDocumentResponse = {
  Documents: MyDocument[];
  Pagination: Pagination;
};

export type AuthorResponse = {
  Authors: Author[];
  Pagination: Pagination;
};
