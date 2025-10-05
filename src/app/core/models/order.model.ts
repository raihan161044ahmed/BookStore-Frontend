import { Payment } from './payment.model';
import { Book } from './book.model';

export interface OrderItem {
  id: string;
  bookId: string;
  book?: Book; 
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  userId: string;
  totalAmount: number;
  status: string; 
  createdAt: string; 
  items: OrderItem[];
  payment?: Payment; 
}
