import { Injectable } from '@angular/core';
import { Product } from './products.interface';
import { Observable, of } from 'rxjs';
import { ProductsDiscountService } from './products-discount.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private productsDiscountService: ProductsDiscountService) {}

  getProducts(): Observable<Product[]> {
    return of(this.productsDiscountService.getDataWithDiscount());
  }

  getProductById(productId: number) {
    return this.productsDiscountService
      .getDataWithDiscount()
      .find((product) => product.id === productId);
  }
}
