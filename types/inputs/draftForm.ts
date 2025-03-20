import type { Media } from '../media';

export interface DraftForm {
  title: string | null;
  description: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  image: Media[] | File | null | undefined;
}
