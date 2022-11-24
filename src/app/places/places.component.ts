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
  geoObject: any;



  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.geoObject = this.userService.getGeo();
    console.log("Got geo object from quiz: ", this.geoObject);

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
    
    let paramObject = {
      userId: sessionStorage.getItem("ID:")
    }

    this.userService.getPlacesNode(paramObject).subscribe(geoPlacesObject => {
      this.places = geoPlacesObject.places.results;

    
      console.log("Observable Object: ", this.places);
      //console.log("Observable resolved: " + JSON.stringify(this.places));
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
