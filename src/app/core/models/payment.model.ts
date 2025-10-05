export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  method: string; 
  paidAt: string; 
}
