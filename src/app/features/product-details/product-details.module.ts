import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProductDetailsComponent],
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
