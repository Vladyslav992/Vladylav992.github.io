import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from '@app/core/services/cart.service';
@Component({
  selector: 'app-catalog-dropdown',
  templateUrl: './catalog-dropdown.component.html',
  styleUrl: './catalog-dropdown.component.scss',
})
export class CatalogDropdownComponent implements OnInit {
  constructor(private cartService: CartService) {}
  items: any[] = [];
  form = new FormControl();

  ngOnInit(): void {
    this.cartService.items$.subscribe((items) => {
      this.items = items;
    });
    this.cartService.getFromLocalStorage();
    this.form.setValue(this.items.map((item) => item.name));
  }
}
