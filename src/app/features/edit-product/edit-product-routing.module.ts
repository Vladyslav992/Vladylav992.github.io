import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  EditProductContainerComponent
} from "@app/features/edit-product/components/edit-product-container/edit-product-container.component";

const routes: Routes = [{path: '', component: EditProductContainerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProductRoutingModule {
}
