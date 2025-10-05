import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../../../core/services/payment';
import { OrderService } from '../../../../core/services/order';
import { Order } from '../../../../core/models/order.model';
import { Payment } from '../../../../core/models/payment.model';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  templateUrl: './order-detail.html'
})
export class OrderDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private orderService = inject(OrderService);
  private paymentService = inject(PaymentService);

  order?: Order;
  payments: Payment[] = [];
  loading = true;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.loadData(id);
  }

  loadData(id: string) {
    this.orderService.getById(id).subscribe({
      next: (o) => {
        this.order = o;
        this.loading = false;
      },
      error: () => (this.loading = false)
    });

    this.paymentService.getPaymentsByOrder(id).subscribe({
      next: (p) => (this.payments = p)
    });
  }
}
