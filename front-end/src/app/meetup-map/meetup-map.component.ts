import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-meetup-map',
  templateUrl: './meetup-map.component.html',
  styleUrls: ['./meetup-map.component.css'],
  providers: [EventsService]
})
export class MeetupMapComponent implements OnInit {
  events = {};

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.fetchEvents().subscribe(
      (events) => this.events = events
    )
  }

}
