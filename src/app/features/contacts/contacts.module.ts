import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

import { ContactsComponent } from './componenets/contacts/contacts.component';
import { ContactsFormComponent } from './componenets/contacts-form/contacts-form.component';
import { ContactsHeadingComponent } from './componenets/contacts-heading/contacts-heading.component';
import { ContactsMapComponent } from './componenets/contacts-map/contacts-map.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactsFormComponent,
    ContactsHeadingComponent,
    ContactsMapComponent,
  ],
  imports: [CommonModule, GoogleMapsModule, RouterModule],
})
export class ContactsModule {}
