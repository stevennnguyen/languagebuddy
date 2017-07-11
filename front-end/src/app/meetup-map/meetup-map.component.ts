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
  homeLat: number = 33.68535614013672;
  homeLng: number = -117.81024932861328;
  events = {};

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.fetchEvents().subscribe(
      (events) => this.events = events.results
    )
  }

}
