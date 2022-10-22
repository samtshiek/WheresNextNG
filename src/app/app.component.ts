import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wheres-next';
  navLinks: any[];
  activeLinkIndex = -1;
 
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
        }, 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}

}
