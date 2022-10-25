import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WheresNext';
  loggedIn: boolean = false;
  currentUser: string = 'Please Log In';


  ngOnInit(): void {
    if(sessionStorage.getItem('ID:') === null){
      this.loggedIn = false;
    }
      else if(sessionStorage.getItem('ID:').length > 5){
      this.loggedIn = true;
      this.currentUser = 'Welcome ' + sessionStorage.getItem('Name:');
    }
  }
 
    
}
