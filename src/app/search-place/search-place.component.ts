import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';


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
  places: [] = [];
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

        this.userService.getPlacesAdvanced(this.Keyword, this.lat, this.long, this.Radius, this.Type).subscribe(places => {
          this.places = places.results;
          this.displayed = true;
          console.log("Places result: ", places);
  
          //console.log("Observable resolved: " + JSON.stringify(places));
      });
      });

    }
  }

  

}
