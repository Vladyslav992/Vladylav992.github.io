import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { ShopComponent } from './components/shop/shop.component';

import { LimitCharactersPipe } from '../../shared/pipes/limit-characters.pipe';
import { RouterLink } from '@angular/router';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [ProductsComponent, ShopComponent],
  imports: [
    CommonModule,
    FormsModule,
    LimitCharactersPipe,
    RouterLink,
    ShopRoutingModule,
  ],
})
export class ShopModule {}
