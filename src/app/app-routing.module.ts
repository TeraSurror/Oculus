import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';


const routes: Routes = [
  { path : '' , redirectTo : 'home' , pathMatch : 'full' },
  { path : 'home' , component : HomePageComponent },
  { path : 'about-us' , component : AboutUsPageComponent },
  { path : 'events' , component : EventsPageComponent },
  { path : 'navigation' , component : NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
