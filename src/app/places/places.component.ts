import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import {Navigation} from '@angular/router';





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
  Address: string = '';
  Radius: string = '';
  lat?: string = '';
  long?: string = '';
  geoObject: any;
  existingUser: any;
  placesArray: any[] = [];



  
  constructor(private userService: UserService, private router: Router) {
    let nav: Navigation = this.router.getCurrentNavigation();

   if(nav.extras && nav.extras.state && nav.extras.state.geo) {
      this.Address = nav.extras.state.geo.address;
      this.Radius = nav.extras.state.geo.radius;

      console.log("Geo from Nav: ", nav.extras.state.geo);
    }
   }

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
    
    let uid =(sessionStorage.getItem('ID:'));

      //Get user object
      this.userService.getUser(uid)
          .subscribe(data => {
          console.log("User data: ", data);
        this.existingUser = data;

      }, error => {}, () => {
        //Set parameters for place call
       let paramObject = {
        userId: sessionStorage.getItem("ID:"),
        address: this.Address,
        radius: this.Radius,
        type: this.Type,
        keyword: this.Keyword
      }

      //If address is empty use city and state from user object
      if(paramObject.address.length == 0) {
        paramObject.address = this.existingUser.city + ", " + this.existingUser.state;
      }

      if(paramObject.radius.length == 0) {
        paramObject.radius = "1000";
      }
      
      console.log("Param Object: ", paramObject);

      //Place call
      this.userService.getPlacesNode(paramObject).subscribe(geoPlacesObject => {
        this.places = geoPlacesObject.places.results;
  
      
        console.log("Places Observable Object: ", this.places);
        //console.log("Observable resolved: " + JSON.stringify(this.places));
    }, error => {console.log("Error occurred", error)}, () => {
      console.log("Node Place call Completed");
    });
      });
    
  }

  onSelectPlace(place: any): void {
    this.selectedPlace = place;
  }



// Add places to favaorite to backend
addPlaceToFavorites(place: any): void  {
  let ID = sessionStorage.getItem('ID:');
    let favObject = {
    id : ID, 
    place : place,
    
    }

  this.userService.addPlaceToFavorite(favObject).subscribe(data => {
    console.log("Place added: ", data);
    
  });
}

}
