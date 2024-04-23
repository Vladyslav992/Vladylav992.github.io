import {Injectable} from '@angular/core';
import {ProductInCart} from '@app/shared/interfaces/productInCart.interface';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<ProductInCart[]>([]);
  items$ = this.cartSubject.asObservable();

  addToCart(product: ProductInCart) {
    const currentItems = this.cartSubject.getValue();
    currentItems.push(product);
    this.cartSubject.next(currentItems);
  }

  deleteItemFromCart(itemToRemove: ProductInCart) {
    const items = this.cartSubject
      .getValue()
      .filter((item) => item.id !== itemToRemove.id);
    this.cartSubject.next(items);
  }

  clearCart() {
    this.cartSubject.next([]);
  }

  getItems() {
    return this.cartSubject.getValue();
  }

  getItemById(productId: number) {
    const currentItems = this.cartSubject.getValue();
    return currentItems.find((item) => item.id === productId);
  }

  increaseQuantity(product: ProductInCart) {
    const currentItems = this.cartSubject.getValue();
    const updatedItems = currentItems.map((item) => {
      if (item.id === product.id) {
        item.quantity += 1;
      }
      return item;
    });
    this.cartSubject.next(updatedItems);
  }

  decreaseQuantity(product: ProductInCart) {
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
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  getFromLocalStorage() {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('cart');
      if (cart) {
        this.cartSubject.next(JSON.parse(cart));
      }
    }
  }

}
