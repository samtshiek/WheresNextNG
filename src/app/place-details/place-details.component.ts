import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { getMatFormFieldPlaceholderConflictError } from '@angular/material/form-field';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  id: string;
  place:any;
  slides = [];

  constructor(private userService: UserService,private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("id: ",this.id);

    this.userService.getPlace(this.id).subscribe(place => {
      this.place = place.result;
     // this.userService.getImage
      this.place.photos.forEach(photo => {
      this.slides.push({'image':'https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photo_reference='+photo.photo_reference+'&key=AIzaSyAq8gX10e_a_1ojTNAxnN3jmQar4bBGtd4'});
    }); 

    console.log("Slides: "+this.slides.values);


    
      console.log("Observable Object: ", place);
      console.log("Observable resolved: " + JSON.stringify(place));
  });

 

}



}
