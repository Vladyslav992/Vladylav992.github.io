import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogDropdownComponent} from './components/catalog-dropdown/catalog-dropdown.component';
import {OrderRoutingModule} from './order-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatFormField, MatSelectModule} from '@angular/material/select';
import {LimitCharactersPipe} from '@app/shared/pipes/limit-characters.pipe';
import {AddressComponent} from './components/address/address.component';
import {MatInputModule} from '@angular/material/input';
import {PaymentMethodComponent} from './components/payment-method/payment-method.component';
import {DeliveryDateComponent} from './components/delivery-date/delivery-date.component';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {CheckoutComponent} from './components/checkout/checkout.component';
import {FormContainerComponent} from './components/form-container/form-container.component';
import {HttpClientModule} from "@angular/common/http";
import { SuccessComponent } from './components/success/success.component';

@NgModule({
  declarations: [
    CatalogDropdownComponent,
    AddressComponent,
    PaymentMethodComponent,
    DeliveryDateComponent,
    CheckoutComponent,
    FormContainerComponent,
    SuccessComponent,
  ],
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
    MatInputModule,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    HttpClientModule,
  ],
})
export class OrderModule {
}
