import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeetupMapComponent } from './meetup-map/meetup-map.component';

import { HttpModule } from '@angular/http'; 
import { AgmCoreModule } from '@agm/core';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetupMapComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCz6oDVWAp1kgxS8MPcZpkLSvfcK9H3B_Y'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
