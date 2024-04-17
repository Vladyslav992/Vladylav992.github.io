import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogDropdownComponent } from './components/catalog-dropdown/catalog-dropdown.component';
import { OrderRoutingModule } from './order-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatFormField } from '@angular/material/select';
import { LimitCharactersPipe } from '@app/shared/pipes/limit-characters.pipe';
import { AddressComponent } from './components/address/address.component';

@NgModule({
  declarations: [CatalogDropdownComponent, AddressComponent],
  imports: [
    CommonModule,
    RouterModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatListModule,
    MatFormField,
    LimitCharactersPipe,
  ],
})
export class OrderModule {}
