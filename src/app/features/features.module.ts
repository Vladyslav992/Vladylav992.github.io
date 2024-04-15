import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { ProductDetailsModule } from './product-details/product-details.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeModule, RouterModule],
})
export class FeaturesModule {}
