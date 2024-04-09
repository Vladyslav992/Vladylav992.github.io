import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { ContactsModule } from './contacts/contacts.module';
import { AboutModule } from './about/about.module';
import { ShopModule } from './shop/shop.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ContactsModule,
    AboutModule,
    ShopModule,
    RouterModule,
  ],
})
export class FeaturesModule {}
