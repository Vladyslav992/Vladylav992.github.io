import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavigationComponent, FooterComponent],

  exports: [FooterComponent, NavigationComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class CoreModule {}
