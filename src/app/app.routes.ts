import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: 'books',
    loadChildren: () =>
      import('./features/books/books-module').then(m => m.Books)
  },

  {
    path: 'orders',
    loadChildren: () =>
      import('./features/orders/orders-module').then(m => m.OrdersModule)
  },

  {
    path: 'payments',
    loadChildren: () =>
      import('./features/payments/payments-module').then(m => m.PaymentsModule)
  },

//   {
//     path: 'dashboard',
//     loadChildren: () =>
//       import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
//   },

  {
    path: '**',
    redirectTo: 'books'
  }
];
