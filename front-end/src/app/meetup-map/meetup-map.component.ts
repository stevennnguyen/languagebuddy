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
  lat: number = 33.68535614013672;
  lng: number = -117.81024932861328;
  lat2: number = 33.842350006103516;
  lng2: number = -118.38854217529297;
  events = {};

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.fetchEvents().subscribe(
      (events) => this.events = events
    )
  }

}
