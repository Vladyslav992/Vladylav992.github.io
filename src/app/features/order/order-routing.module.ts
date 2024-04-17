import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogDropdownComponent } from './components/catalog-dropdown/catalog-dropdown.component';
const routes: Routes = [
  { path: 'catalog', component: CatalogDropdownComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
