import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ResourcesService {
  
  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('https://languagebuddy-75070.firebaseio.com/.json').map(
      (res) => res.json()
    );

  }

}





