import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';

export interface PlaceTile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-search-place',
  templateUrl: './search-place.component.html',
  styleUrls: ['./search-place.component.css']
})



export class SearchPlaceComponent implements OnInit {
  Address: string = '';
  FormattedAddress: string = '';
  Type: string = '';
  Keyword: string = '';
  Radius: string = '';
  places: any[];
  geocode!: any[];
  lat?: string = '';
  long?: string = '';
  displayed: boolean = false;
  existingUser: any

  constructor(private userService: UserService ) {}

  ngOnInit(): void {
  
  }

  

  advancedPlaceSearch(): void {
  
    console.log("Address entered: " + this.Address);

    let paramObject = {
      address: this.Address,
      type: this.Type.toLowerCase(),
      keyword: this.Keyword,
      radius: this.Radius,
      id: sessionStorage.getItem("ID:")
    }

    if(this.Address != null && this.Address.length !=0) {
      let uid =(sessionStorage.getItem('ID:'));

      //Get user object
      this.userService.getUser(uid)
          .subscribe(data => {
          console.log("User data: ", data);
        this.existingUser = data;

      }, error => {}, () => {


      //If address is empty use city and state from user object
      if(paramObject.address.length == 0) {
        paramObject.address = this.existingUser.city + ", " + this.existingUser.state;
      }

      if(paramObject.radius.length == 0) {
        if(this.existingUser.preference.radius.length > 0) {
          paramObject.radius = this.existingUser.preference.radius;
        }

        else {
          paramObject.radius = "1000";
        }
      }
      
      console.log("Param Object: ", paramObject);

      //Place call
      this.userService.getPlacesAdvanced(paramObject).subscribe( geoPlacesObject => {
        console.log("Places: ", geoPlacesObject);
        this.places = geoPlacesObject.places.results;
        this.geocode = geoPlacesObject.geo.results;
        if (this.places.length == 0) {
          this.FormattedAddress = "No result has been found for this area.";
        }
        else {
          this.displayed = true;
          this.FormattedAddress = "Results for area surrounding: " + this.geocode[0].formatted_address;
        }
      });
      });

    }
  }

}
