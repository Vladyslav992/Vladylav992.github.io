import { Injectable } from '@angular/core';
import { ProductToCart } from '@app/shared/interfaces/productToCart.interface';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<ProductToCart[]>([]);
  items$ = this.cartSubject.asObservable();

  addToCart(product: ProductToCart) {
    const currentItems = this.cartSubject.getValue();
    currentItems.push(product);
    this.cartSubject.next(currentItems);
  }

  deleteFromCart(itemToRemove: ProductToCart) {
    const items = this.cartSubject
      .getValue()
      .filter((item) => item.id !== itemToRemove.id);
    this.cartSubject.next(items);
  }

  clearCart() {
    this.cartSubject.next([]);
  }

  getItemById(productId: number) {
    const currentItems = this.cartSubject.getValue();
    return currentItems.find((item) => item.id === productId);
  }

  increaseQuantity(product: ProductToCart) {
    const currentItems = this.cartSubject.getValue();
    const updatedItems = currentItems.map((item) => {
      if (item.id === product.id) {
        item.quantity += 1;
      }
      return item;
    });
    this.cartSubject.next(updatedItems);
  }

  decreaseQuantity(product: ProductToCart) {
    const currentItems = this.cartSubject.getValue();
    const updatedItems = currentItems.map((item) => {
      if (item.id === product.id && item.quantity > 1) {
        item.quantity -= 1;
      }
      return item;
    });
    this.cartSubject.next(updatedItems);
  }

  saveToLocalStorage() {
    const cart = this.cartSubject.getValue();
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.cartSubject.next(JSON.parse(cart));
    }
  }
}
