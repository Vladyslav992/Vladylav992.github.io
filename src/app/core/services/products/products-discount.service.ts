import { Injectable } from '@angular/core';
import { data } from '../../../../assets/data';
import { Product } from '../../../shared/interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsDiscountService {
  constructor() {}

  getDataWithDiscount(): Product[] {
    return data.map((item: any, index: number) => {
      if (item.main) {
        item.discount = 0.7;
      } else if (index === 1 || index === 2) {
        item.discount = 0.6;
      } else {
        item.discount = 0.5;
      }
      return item;
    });
  }
}
