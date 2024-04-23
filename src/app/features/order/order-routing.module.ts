import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormContainerComponent} from "@app/features/order/components/form-container/form-container.component";

const routes: Routes = [
  {path: '', component: FormContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {
}
