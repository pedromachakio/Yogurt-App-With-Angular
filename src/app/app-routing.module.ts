import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { IndividualNewsComponent } from './components/individual-news/individual-news.component';
import { ListOfNewsComponent } from './components/list-of-news/list-of-news.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'news', component: ListOfNewsComponent },
  { path: 'news/:id', component: IndividualNewsComponent },
  /* { path: 'flavors/:flavor', component: LandingPageComponent }, */
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
