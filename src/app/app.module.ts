import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule } from 'angularfire2/database';


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
import { ThemeCarouselComponent } from './pages/home-page/theme-carousel/theme-carousel.component';
import { environment } from 'src/environments/environment';



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
    PerformingArtsComponent,
    ThemeCarouselComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
