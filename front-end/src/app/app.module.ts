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
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

const appRoutes: Routes = [
  { path: '', component: MeetupMapComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'resources', component: ResourcesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MeetupMapComponent,
    NavComponent,
    FooterComponent,
    ResourcesComponent,
    AboutComponent,
    ContactComponent
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
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
