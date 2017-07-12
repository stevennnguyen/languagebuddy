import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeetupMapComponent } from './meetup-map/meetup-map.component';
import { ResourcesComponent } from './resources/resources.component';

import { HttpModule } from '@angular/http'; 
import { AgmCoreModule } from '@agm/core';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: MeetupMapComponent },
  { path: 'resources', component: ResourcesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MeetupMapComponent,
    NavComponent,
    FooterComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCz6oDVWAp1kgxS8MPcZpkLSvfcK9H3B_Y'
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
