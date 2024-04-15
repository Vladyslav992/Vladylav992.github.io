import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./features/shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'products/:productId',
    loadChildren: () =>
      import('./features/product-details/product-details.module').then(
        (m) => m.ProductDetailsModule
      ),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./features/contacts/contacts.module').then(
        (m) => m.ContactsModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
