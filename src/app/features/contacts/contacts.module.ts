import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoogleMapsModule} from '@angular/google-maps';

import {ContactsComponent} from './components/contacts/contacts.component';
import {ContactsFormComponent} from './components/contacts-form/contacts-form.component';
import {ContactsHeadingComponent} from './components/contacts-heading/contacts-heading.component';
import {ContactsMapComponent} from './components/contacts-map/contacts-map.component';
import {RouterModule} from '@angular/router';
import {ContactsRoutingModule} from './contacts-routing.module';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ContactsComponent,
    ContactsFormComponent,
    ContactsHeadingComponent,
    ContactsMapComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    RouterModule,
    ContactsRoutingModule,
    FormsModule
  ],
})
export class ContactsModule {
}
