import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[] = [];
  selectedUser?: User;
  places:[] = [];
  selectedPlace?;
  
  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  getPlaces(): void {
    this.userService.getPlaces().subscribe(places => {
      this.places = places.results;
      console.log("Observable Object: ", places);
      console.log("Observable resolved: " + JSON.stringify(places));
  });
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getPlaces();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  onSelectPlace(place: any): void {
    this.selectedPlace = place;
  }
}
