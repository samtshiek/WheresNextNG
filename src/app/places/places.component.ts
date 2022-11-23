import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router'





@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],

})
export class PlacesComponent implements OnInit {
  places:[] = [];
  selectedPlace?;
  loggedIn: boolean;
  Type: string = '';
  Keyword: string = '';
  Radius: string = '';
  lat?: string = '';
  long?: string = '';



  
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
    this.long = "122.23";
    this.lat=  "47.6";
    this.Radius = "1000";

    this.userService.getPlacesAdvanced(this.Keyword,this.lat,this.long,this.Radius,this.Type).subscribe(places => {
      this.places = places.places.results;

    
      console.log("Observable Object: ", places);
      console.log("Observable resolved: " + JSON.stringify(places));
  });
  }

  onSelectPlace(place: any): void {
    this.selectedPlace = place;
  }
  // add to favorites for selected place and send to favorites component
  // addToFavorites(place: any): void {
  //   this.selectedPlace = place;
  //   this.userService.addToFavorites(place);
    
  // }

  

}
