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
  displayedColumns = ["author_name","rating","relative_time","text"];
  reviews = [];
  opening = [];
  open = true;b

  constructor(private userService: UserService,private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("id: ",this.id);
    

  

    this.userService.getPlace(this.id).subscribe(place => {
      this.place = place.result;
      this.place.photos.forEach(photo => {
      this.slides.push({'image':'https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photo_reference='+photo.photo_reference+'&key=AIzaSyAq8gX10e_a_1ojTNAxnN3jmQar4bBGtd4'});
        
      }); 

      this.place.reviews.forEach(review =>{
        this.reviews.push({'author_name': review.author_name,'rating':review.rating,'relative_time':review.relative_time_description,'text': review.text,'profphoto':review.profile_photo_url});
      });
     // this.opening = this.place.current_opening_hours;
/*        this.place.current_opening_hours.forEach(open1 =>{
        open1.forEach(open2=>{
          open2.weekday_text.forEach(open3=>{
            this.opening.push({'period': open3});
          });
          
        });
        
      });

      if(this.opening.values[0] == 'open'){
        this.open = true;
      } */
 

    console.log("Reviews: "+this.reviews);

   // console.log("Slides: "+this.slides.values);


    
      console.log("Observable Object: ", place);
      console.log("Observable resolved: " + JSON.stringify(place));
  });

 

}

addPlaceToFavorites(place: any): void  {
  let ID = sessionStorage.getItem('ID:');
    let favObject = {
    id : ID, 
    place : place,
    
    }

  this.userService.addPlaceToFavorite(favObject).subscribe(data => {
    console.log("Place added: ", data);

    alert(`Place added to favorites!`);
    
  });
}




}


