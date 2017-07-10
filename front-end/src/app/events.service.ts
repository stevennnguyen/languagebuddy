import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {

  constructor(private http: Http) { }

  //Seek the plain text data at the end point, then map the data to a valid json object.
  fetchEvents() {
    return this.http.get("http://localhost:4000/api/events").map(
      (res) => res.json()
    );
  }
}