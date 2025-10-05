import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/orders`;

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }


  getById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.baseUrl}/${id}`);
  }
  create(order: Partial<Order>): Observable<Order> {
    return this.http.post<Order>(this.baseUrl, order);
  }

  update(id: string, order: Partial<Order>): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, order);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
