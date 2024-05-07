import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PriceFormComponent} from './components/price-form/price-form.component';
import {EditProductContainerComponent} from './components/edit-product-container/edit-product-container.component';
import {EditProductRoutingModule} from "@app/features/edit-product/edit-product-routing.module";
import {DetailsFormComponent} from './components/details-form/details-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ImagePreviewComponent} from "@app/shared/components/image-preview/image-preview.component";


@NgModule({
  declarations: [
    PriceFormComponent,
    EditProductContainerComponent,
    DetailsFormComponent
  ],
  imports: [
    CommonModule,
    EditProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ImagePreviewComponent,
  ]
})
export class EditProductModule {
}
