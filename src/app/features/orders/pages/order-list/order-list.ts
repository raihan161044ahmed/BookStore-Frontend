import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../../../core/services/order';
import { Order } from '../../../../core/models/order.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-order-list',
  templateUrl: './order-list.html',
})
export class OrderListComponent implements OnInit {
  private orderService = inject(OrderService);
  private router = inject(Router);
  orders: Order[] = [];
  loading = true;

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getAll().subscribe({
      next: (res) => {
        this.orders = res;
        this.loading = false;
      },
      error: () => (this.loading = false)
    });
  }

  goToDetail(id: string) {
    this.router.navigate(['/order-detail', id]);
  }
}
