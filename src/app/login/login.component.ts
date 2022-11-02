import { Component, OnInit } from '@angular/core';
import { loginUser, User } from '../user';
import { NewUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loggedIn: boolean;
  newUser: NewUser;
  existingUser: User;
  user:loginUser;
  
  CreateAccount(pUserName:string, pPw:string, pEmail:string, pFirstName:string, pLastname:string, pAge:string,pSex:string,pCity:string,pState:string, pCountry:string): void {      //newuser does not have an _id
      this.newUser = {
        username: pUserName,
        password: pPw,
        firstName: pFirstName,
        lastName: pLastname,
        age:pAge,
        sex:pSex,
        email:pEmail,
        city:pCity,
        state:pState,
        country:pCountry

      }

    this.userService.newUser(this.newUser)
   .subscribe(data => {
    this.existingUser = data;
    this.loggedIn = true;

    sessionStorage.setItem('ID:', this.existingUser.id );
    sessionStorage.setItem('Name:', this.existingUser.username);
    //window.location.href = '/dashboard';

    //return
   })
  }

  login (pUserName:string, pPw:string,): void {

    this.user = {
      username: pUserName,
      password: pPw,

    }
    this.userService.loginUser(this.user)
      .subscribe(data => {
        console.log("id coming back ", data)
        this.existingUser.id = data;
        sessionStorage.setItem('ID:', data);
        sessionStorage.setItem('Name:', this.user.username);
 
        this.loggedIn = true;
        console.log("in login " + this.loggedIn);
        //window.location.href = '/dashboard';
        //return  // not sure this is needed, but a multi line subscribe method normally needs one
       });
  }

  logout(): void{
    sessionStorage.setItem('ID:', "" );
    sessionStorage.setItem('Name:', "");
    this.loggedIn = false;
    console.log("in logout " + this.loggedIn);
    //window.location.href = '/dashboard';
  }

  constructor(private userService: UserService) {
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
      }
      else if(  sessionStorage.getItem('ID:').length < 5 )
      {
        console.log('in init2 false');
        this.loggedIn = false;
      }
      else {
        this.loggedIn = true;
        console.log('in init3 true');
      }
    }

}