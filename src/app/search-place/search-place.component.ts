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

  constructor(private userService: UserService ) {}

  ngOnInit(): void {
  
  }

  

  advancedPlaceSearch(): void {
  
    console.log("Address entered: " + this.Address);

    if(this.Address != null && this.Address.length !=0) {

      let paramObject = {
        address: this.Address,
        type: this.Type,
        keyword: this.Keyword,
        radius: this.Radius,
        userId: sessionStorage.getItem("ID:")
      }

      console.log("Object to send: ", paramObject);
      
      this.userService.getLongLat(this.Address).subscribe(jsonObject => {
        this.geocode = jsonObject.results;
        console.log("Geolocation result: ", this.geocode);
       
        this.lat = this.geocode[0].geometry.location.lat;
        this.long = this.geocode[0].geometry.location.lng;
        console.log("Results for area surrounding: " + this.geocode[0].formatted_address);
        
        this.FormattedAddress = "Results for area surrounding: " + this.geocode[0].formatted_address;

        console.log("Lat and Long: ", this.lat + "/" + this.long);
      }, error => {
        console.log("An error occured: ", error);
      }, () => {
        console.log("Geo call complete ");

      //geoPlacesJsonObject carries two fields (places object and geo object). geo object carries geolocation call data, while places carries places call results 
      this.userService.getPlacesAdvanced(paramObject.keyword, this.lat, this.long, paramObject.radius, paramObject.type).subscribe(places => {
        console.log("Place result node angular: ", places);
        this.places = places.results;
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
