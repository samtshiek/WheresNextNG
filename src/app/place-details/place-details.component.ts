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

  constructor(private userService: UserService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("id: ",this.id);

    this.userService.getPlace(this.id).subscribe(place => {
      this.place = place.result;
     // this.userService.getImage
    
      console.log("Observable Object: ", place);
      console.log("Observable resolved: " + JSON.stringify(place));
  });

}

  

}
