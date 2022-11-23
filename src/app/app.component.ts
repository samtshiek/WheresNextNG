import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WheresNext';
  loggedIn: boolean = false;
  currentUser: string = 'Please Log In';
  navLinks: any[];
  activeLinkIndex = -1;
  uID: number = null;
  slides = [{'image': '/assets/img/trail.png'}, 
  {'image': '/assets/img/coffee.jpg'},
  {'image': '/assets/img/movie.jpg'}, 
  {'image': '/assets/img/musuem.jpg'}, 
  {'image': '/assets/img/restaurant.jpg'}
];
    

 
  

  signup:boolean =false;
  loginbut:boolean = false;
  edituser:boolean =false;
 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Home',
            link: './',
            index: 0
        }, {
            label: 'Profile',
            link: './Profile',
            index: 1
        }, {
            label: 'Favorites',
            link: './Favorites',
            index: 2
        }, {
            label: 'Places',
            link: './Places',
            index: 3
        },  {
          label: 'Search Place',
          link: './Search-Place',
          index: 4
      },
    ];
    
}
ngOnInit(): void {

  console.log("Userid :", sessionStorage.getItem("ID:"));

  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
   if(sessionStorage.getItem('ID:') === null){
    this.loggedIn = false;
  }
    else if(sessionStorage.getItem('ID:').length > 5){
    this.loggedIn = true;
    this.uID = Number(sessionStorage.getItem('ID:'));
    this.currentUser = 'Welcome ' + sessionStorage.getItem('Name:');
  } 



 
}


logout(): void{
  sessionStorage.setItem('ID:', "" );
  sessionStorage.setItem('Name:', "");
  this.loggedIn = false;
  console.log("in logout " + this.loggedIn);
  window.location.href = '/';
}
signmeUp():void{
  this.signup =true;
  this.loginbut =false;
}
logIn():void{
  this.loginbut =true;
  this.signup =false;
}

 
}
