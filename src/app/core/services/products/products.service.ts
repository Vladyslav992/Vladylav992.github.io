import { Injectable } from '@angular/core';
import { data } from '../../../../assets/data';
import { Product } from './products.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(
      data.map((item: any, index: number) => {
        if (item.main) {
          item.discount = 0.7;
        } else if (index === 1 || index === 2) {
          item.discount = 0.6;
        } else {
          item.discount = 0.5;
        }
        return item;
      })
    );
  }
}
