import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home.component';
import { ContactsComponent } from './features/contacts/componenets/contacts/contacts.component';
import { AboutHighlightsComponent } from './features/about/components/about-highlights/about-highlights.component';
import { AboutTimelineComponent } from './features/about/components/about-timeline/about-timeline.component';
import { AboutComponent } from './features/about/components/about/about.component';
import { NewsletterComponent } from './features/home/components/newsletter/newsletter.component';
import { BannerComponent } from './features/home/components/banner/banner.component';
import { SuggestionComponent } from './features/home/components/suggestion/suggestion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'Home',
    component: HomeComponent,
    children: [
      { path: 'Collections', component: SuggestionComponent },
      { path: 'Banner', component: BannerComponent },
      { path: 'Newsletter', component: NewsletterComponent },
    ],
  },
  {
    path: 'About',
    component: AboutComponent,
    children: [
      {
        path: 'History',
        component: AboutTimelineComponent,
      },
      {
        path: 'Highlights',
        component: AboutHighlightsComponent,
      },
    ],
  },
  { path: 'Contacts', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
