import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { ShopComponent } from './components/shop/shop.component';

import { LimitCharactersPipe } from '../../shared/pipes/limit-characters.pipe';

@NgModule({
  declarations: [ProductsComponent, ShopComponent],
  imports: [CommonModule, FormsModule, LimitCharactersPipe],
})
export class ShopModule {}
