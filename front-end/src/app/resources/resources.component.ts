import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../resources.service';
declare var firebase: any;

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
  providers: [ResourcesService]
})
export class ResourcesComponent implements OnInit {
  resources = [];
  constructor(private resourcesService: ResourcesService) { }

  ngOnInit() {
    //functionality should be in service
    /*this.resourcesService.fetchData().subscribe(
      (resources) => this.resources = resources
    );*/

    this.fbGetData();
  }

  fbGetData(){
    firebase.database().ref('/').on('child_added', (snapshot) => {
      this.resources.push(snapshot.val());
      if(snapshot.val().language == "Japanese"){
      console.log(snapshot.val());
      }
    })
  }

  fbPostData(method){
      firebase.database().ref('/').push(method)
  }

  fbRemoveData(){
    firebase.database().ref('/').remove();
  }

}
