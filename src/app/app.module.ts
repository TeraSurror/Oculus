import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { ParallaxDirective } from './directives/parallax.directive';
import { SponsorsComponent } from './pages/sponsors/sponsors.component';
import { TechEventsComponent } from './pages/events/tech-events/tech-events.component';
import { LiteraryEventsComponent } from './pages/events/literary-events/literary-events.component';
import { FunEventsComponent } from './pages/events/fun-events/fun-events.component';
import { FeaturedEventsComponent } from './pages/events/featured-events/featured-events.component';
import { PerformingArtsComponent } from './pages/events/performing-arts/performing-arts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsPageComponent,
    EventsPageComponent,
    NavbarComponent,
    ParallaxDirective,
    SponsorsComponent,
    TechEventsComponent,
    LiteraryEventsComponent,
    FunEventsComponent,
    FeaturedEventsComponent,
    PerformingArtsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
