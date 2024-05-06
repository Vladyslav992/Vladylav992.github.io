import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './features/home/components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
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
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./features/order/order.module').then((m) => m.OrderModule),
  },
  {
    path: 'add-new-product',
    loadChildren: () =>
      import('./features/add-new-product/add-new-product.module')
        .then((m) => m.AddNewProductModule),
  },
  {
    path: 'edit-product/:productId',
    loadChildren: () =>
      import('./features/edit-product/edit-product.module')
        .then((m) => m.EditProductModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
