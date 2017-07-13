import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
  providers: [ResourcesService]
})
export class ResourcesComponent implements OnInit {
  resources = {};
  constructor(private resourcesService: ResourcesService) { }

  ngOnInit() {
    this.resourcesService.fetchData().subscribe(
      (resources) => this.resources = resources.languages
    );
  }

}
