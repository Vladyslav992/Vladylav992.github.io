import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {AddProductComponent} from './components/add-product/add-product.component';
import {RouterModule} from "@angular/router";
import {AddNewProductRoutingModule} from "@app/features/add-new-product/add-new-product-routing.module";
import {ImagePreviewComponent} from '@app/shared/components/image-preview/image-preview.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AddProductComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AddNewProductRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    ImagePreviewComponent
  ]
})
export class AddNewProductModule {
}
