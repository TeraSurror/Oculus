import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { SponsorsComponent } from './pages/sponsors/sponsors.component';
import { TechEventsComponent } from './pages/events/tech-events/tech-events.component';
import { FeaturedEventsComponent } from './pages/events/featured-events/featured-events.component';
import { FunEventsComponent } from './pages/events/fun-events/fun-events.component';
import { PerformingArtsComponent } from './pages/events/performing-arts/performing-arts.component';
import { LiteraryEventsComponent } from './pages/events/literary-events/literary-events.component';


const routes: Routes = [
  { path : '' , redirectTo : 'home' , pathMatch : 'full' },
  { path : 'home' , component : HomePageComponent },
  { path : 'about-us' , component : AboutUsPageComponent },
  { path : 'events' , component : EventsPageComponent },
  { path : 'events/technical' , component : TechEventsComponent },
  { path : 'events/featured' , component : FeaturedEventsComponent },
  { path : 'events/fun' , component : FunEventsComponent},
  { path : 'events/performing-arts' , component : PerformingArtsComponent },
  { path : 'events/literary' , component : LiteraryEventsComponent },
  { path : 'sponsors', component : SponsorsComponent },
  { path : 'navigation' , component : NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
