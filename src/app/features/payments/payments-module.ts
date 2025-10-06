import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaymentHistoryComponent } from '../payments/pages/payment-history/payment-history';
import { PaymentCheckoutComponent } from '../payments/pages/payment-checkout/payment-checkout';

const routes: Routes = [
  { path: '', component: PaymentHistoryComponent },
  { path: 'checkout', component: PaymentCheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class PaymentsModule {}
