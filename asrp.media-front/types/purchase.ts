import type { Product } from '@/types/product';

export type Purchase = {
  id: string;
  status: string;
  availableTo: string;
  spentAt: string;
  Product: Product;
};
