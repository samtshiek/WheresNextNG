import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  existingUser: User;
  loggedIn: boolean;
  message: string ="";

  constructor(private userService: UserService, private router: Router) { 

  }

  ngOnInit(): void {

    this.existingUser = {
      username: "",
      password: "",
      id: "",
      firstName: "",
      lastName: "",
      age:"",
      sex:"",
      email:"",
      city:"",
      state:"",
      country:""
    }
    if(  sessionStorage.getItem('ID:') == null ) {
      console.log('in init1 false');
      this.loggedIn = false;
      this.router.navigate([`/`]);
    }
    else if(  sessionStorage.getItem('ID:').length < 5 )
    {
      console.log('in init2 false');
      this.loggedIn = false;
      this.router.navigate([`/`]);
    }
    else {
      this.loggedIn = true;
      console.log('in init3 true');
      let uid =(sessionStorage.getItem('ID:'));
      //console.log("Getting the user: "+sessionStorage.getItem('ID:'));
  
      this.userService.getUser(uid)
          .subscribe(data => {
          
        let userInfo =  JSON.parse(JSON.stringify(data));
        this.existingUser = userInfo;
       // this.existingUser
        console.log("Got the user: "+uid);
      })

    }

    
  }

  editUser(pUserName:string, pPw:string, pEmail:string, pFirstName:string, pLastname:string, pAge:string,pSex:string,pCity:string,pState:string, pCountry:string): void {      //newuser does not have an _id
    let userId= sessionStorage.getItem("ID:");
    this.existingUser= {
      username: pUserName,
      password: pPw,
      firstName: pFirstName,
      lastName: pLastname,
      age:pAge,
      sex:pSex,
      email:pEmail,
      city:pCity,
      state:pState,
      country:pCountry,
      id:sessionStorage.getItem("ID:")

    }

  this.userService.updateUser(this.existingUser)
 .subscribe(data => {

  this.message ="Your profile has been sucessfully updated";


 })
 
}

}
