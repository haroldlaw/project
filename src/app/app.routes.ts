import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'gifts/:id',
        children: [
          {
            path: '',
            loadComponent: () => import('./home/details/details.page').then(m => m.DetailsPage),
          },
          {
            path: 'cart',
            loadComponent: () => import('./home/cart/cart.page').then(m => m.CartPage)
          },
          {
            path: 'voucher',
            loadComponent: () => import('./home/voucher/voucher.page').then(m => m.VoucherPage)
          },
        ],
      },
      {
        path: 'cart',
        loadComponent: () => import('./home/cart/cart.page').then(m => m.CartPage)
      },
      {
        path: 'voucher',
        loadComponent: () => import('./home/voucher/voucher.page').then(m => m.VoucherPage)
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];