import type { Order } from '@/types/order';

export type Activity = {
  id: string;
  dateOfStatusChange: string;
  amount: number;
  actualAmount: string;
  actualCurrency: string;
  fee: string;
  createdAt: string;
  status: string;
  Order: Order;
};
