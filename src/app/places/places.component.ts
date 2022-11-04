import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places:[] = [];
  selectedPlace?;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getPlaces();
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
