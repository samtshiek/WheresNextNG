import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  favArrays= [];
  places:[] = [];
  selectedPlace?;
  existingUser: any;
  loggedIn: boolean = false;
  currentUser: string = 'Please Log In';
  navLinks: any[];
  uID: number = null;


  constructor() { }

  ngOnInit( ): void {

    if(sessionStorage.getItem('ID:') === null){
      this.loggedIn = false;
    }
      else if(sessionStorage.getItem('ID:').length > 5){
      this.loggedIn = true;
      this.uID = Number(sessionStorage.getItem('ID:'));
      this.currentUser = sessionStorage.getItem('Name:');
    } 
  

  }





}
