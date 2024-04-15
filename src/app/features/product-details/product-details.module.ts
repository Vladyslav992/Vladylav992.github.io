import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    RouterLink,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class ProductDetailsModule {}
