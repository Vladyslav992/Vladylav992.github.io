import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { AboutHeroComponent } from './components/about-hero/about-hero.component';
import { AboutHighlightsComponent } from './components/about-highlights/about-highlights.component';
import { AboutTimelineComponent } from './components/about-timeline/about-timeline.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AboutComponent,
    AboutHeroComponent,
    AboutHighlightsComponent,
    AboutTimelineComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class AboutModule {}
