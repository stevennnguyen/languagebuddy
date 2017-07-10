import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {

  constructor(private http: Http) { }

  //Seek the plain text data at the end point, then map the data to a valid json object.
  fetchEvents() {
    return this.http.get("https://api.meetup.com/Orange-County-American-Japanese-Language-and-Friendship/events?photo-host=public&page=2&sig_id=203258650&sig=411f991b03f4b41ff91f89cc0193bef3a9ef5e18").map(
      (res) => res.json()
    );
  }
}