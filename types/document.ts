import type { Author } from '@/types/author';
import type { EntityContent } from '@/types/EntityContent';
import type { Research } from '@/types/research';
import type { Course } from '@/types/course';
import type { Product } from './product';
import type { Media } from './media';
import type { DocumentType } from './enums/documenttype';
import type { Banner } from './banner';
import type { Language } from './language';

export type Document = {
  id: string;
  title: string;
  description: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  imageMob: Media[];
  imageWeb: Media[];
  content: string;
  viewsCount: number;
  type: DocumentType;
  Course: Course;
  Categories: Categorie;
  Authors: Author[];
  Researches: Research[];
  DocumentContents: EntityContent[];
  DocumentFreeContents: EntityContent[];
  RecommendedDocuments: Document[];
  publishDate: Date;
  commentsCount: number;
  likesCount: number;
  readsCount: number;
  url: string;
  logo: LogoTypes;
  free: boolean;
  exclusive: boolean;
  isAvailable: boolean;
  premium: boolean;
  productId: string;
  tariffIds: number[];
  isFavorite: boolean;
  isSaved: boolean;
  isWantRead: boolean;
  Comments: Comment[];
  Product: Product;
  Sales: Sale[];
};

type Sale = {
  id: string;
  name: string;
  title: string;
  type: string;
  activeFrom: Date;
  activeTo: Date;
  active: boolean;
  discount: number;
  SalesContents: Content[];
  Banners: Banner[];
};

type Content = {
  id: string;
  Language: Language;
  content: string;
};

type LogoTypes = {
  path: string;
  fileName: string;
  width: number;
  height: number;
  size: number;
  isOriginal: boolean;
};

type Categorie = {
  displayName: string;
  id: string;
  index: number;
  isGeneral: boolean;
  name: string;
};
