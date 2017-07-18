import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
declare var google: any;
declare var mapProp: any;

@Component({
  selector: 'app-meetup-map',
  templateUrl: './meetup-map.component.html',
  styleUrls: ['./meetup-map.component.css'],
  providers: [EventsService]
})
export class MeetupMapComponent implements OnInit {
  title: string = 'My first AGM project';
  homeLat: number = 33.698067;
  homeLng: number = -117.803754;
  events = {};

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.fetchEvents().subscribe(
      (events) => this.events = events.results
    );
  }

  rad = function(x) {
    return x * Math.PI / 180;
  };

  //two distance objects
  getDistance = function(p1, p2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = this.rad(p2.lat - p1.lat);
    var dLong = this.rad(p2.lng - p1.lng);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.rad(p1.lat)) * Math.cos(this.rad(p2.lat)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = Math.round(R * c / 1600);
    return d; // returns the distance in meter
};

  convertEpoch = function (epoch){
    var t = new Date();
    var n = t.getTime();
    var d = new Date(epoch);
    var formattedDate = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
    var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
    var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
    var formattedTime = hours + ":" + minutes;

    formattedDate = formattedDate + " " + formattedTime;
    if( (t.getDate()+t.getDay()+t.getFullYear()) == (d.getDate()+d.getDay()+d.getFullYear()) ){
      return formattedDate + " TODAY!";
    }
    return formattedDate;
  }

}
