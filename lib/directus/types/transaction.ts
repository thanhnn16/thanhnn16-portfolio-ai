// Type definitions for transaction-related collections
import { Order } from './order';

export interface Transaction {
  id: string;
  order_id: string | Order;
  amount: number;
  gateway: string;
  status: 'pending' | 'completed' | 'failed';
  transaction_id: string;
  created_at: string;
}
