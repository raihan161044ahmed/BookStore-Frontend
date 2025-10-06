import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from '../orders/pages/order-list/order-list';
import { OrderDetailComponent } from '../orders/pages/order-detail/order-detail';

const routes: Routes = [
  { path: '', component: OrderListComponent },
  { path: ':id', component: OrderDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class OrdersModule {}
