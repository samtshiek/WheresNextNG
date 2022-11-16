import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places:[] = [];
  selectedPlace?;
  loggedIn: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if(  sessionStorage.getItem('ID:') == null ) {
      console.log('in init1 false');
      this.loggedIn = false;
      this.router.navigate([`/`]);
    }
    else if(  sessionStorage.getItem('ID:').length < 5 )
    {
      console.log('in init2 false');
      this.loggedIn = false;
      this.router.navigate([`/`]);
    }else{
    this.getPlaces();
    }
  }

  getPlaces(): void {
    this.userService.getPlaces().subscribe(places => {
      this.places = places.results;
      console.log("Observable Object: ", places);
      console.log("Observable resolved: " + JSON.stringify(places));
  });
  }

  onSelectPlace(place: any): void {
    this.selectedPlace = place;
  }

}
