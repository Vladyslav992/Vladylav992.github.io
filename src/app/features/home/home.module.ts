import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BannerComponent,
    HeroComponent,
    HomeComponent,
    NewsletterComponent,
    SuggestionComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class HomeModule {}
