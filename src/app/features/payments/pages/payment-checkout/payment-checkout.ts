import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Payment } from '../../../../core/models/payment.model';
import { PaymentService } from '../../../../core/services/payment';

@Component({
  selector: 'app-payment-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-checkout.html',
})
export class PaymentCheckoutComponent {
  private paymentService = inject(PaymentService);

  payment: Partial<Payment> = {
    orderId: '',
    amount: 0,
    method: 'Card',
  };

  successMsg = '';
  errorMsg = '';

  onSubmit(): void {
    this.paymentService.createPayment(this.payment as Payment).subscribe({
      next: () => {
        this.successMsg = 'Payment successful!';
        this.errorMsg = '';
        this.payment = { orderId: '', amount: 0, method: 'Card' };
      },
      error: (err) => {
        this.errorMsg = 'Payment failed. Please try again.';
        console.error(err);
      },
    });
  }
}
