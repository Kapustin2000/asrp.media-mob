import type { Media } from './media';

export type Banner = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  titleUrl: string;
  price: number;
  oldPrice: string;
  priority: number;
  isActive: boolean;
  imageMob: [Media];
  imageWeb: [Media];
};
