import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import {Navigation} from '@angular/router';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  existingUser: any;
  favArrays= [];
  slides = [];
 
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getFavoritePlace();

    
  }


  // getting favorite places from backend
  getFavoritePlace(){
    let uid =(sessionStorage.getItem('ID:'));

    this.userService.getUser(uid)
    .subscribe(data => {
    console.log("User data: ", data);
  this.existingUser  = data;
  this.favArrays = (this.existingUser.preference.favoritePlaces[0]);
  console.log("favorite places", this.favArrays)

  
  

  });

}

}
