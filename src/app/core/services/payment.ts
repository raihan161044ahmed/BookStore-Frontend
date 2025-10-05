import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/payments`;

 getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.baseUrl);
  }

  getPaymentById(id: string): Observable<Payment> {
    return this.http.get<Payment>(`${this.baseUrl}/${id}`);
  }

  getPaymentsByOrder(orderId: string): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.baseUrl}/order/${orderId}`);
  }

  createPayment(payment: Payment): Observable<string> {
    return this.http.post<string>(this.baseUrl, payment);
  }

  updatePayment(id: string, payment: Payment): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, payment);
  }

  deletePayment(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}