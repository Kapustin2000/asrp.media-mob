import type { Product } from '@/types/product';

export type Order = {
  id: string;
  paid: boolean;
  success: boolean;
  Products: Product;
};
