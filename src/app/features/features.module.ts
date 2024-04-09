import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { ContactsModule } from './contacts/contacts.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ContactsModule,
    AboutModule,
    RouterModule,
  ],
})
export class FeaturesModule {}
