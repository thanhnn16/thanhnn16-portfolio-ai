// Type definitions for order-related collections
import { Workflow } from './workflow';

export interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  total_amount: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  created_at: string;
  updated_at: string;
  items?: OrderItem[];
}

export interface OrderItem {
  id: string;
  order_id: string | Order;
  workflow_id: string | Workflow;
  price: number;
  quantity: number;
}
