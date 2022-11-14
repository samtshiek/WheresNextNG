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
  signup:boolean =false;
  loginbut:boolean = false;

  signmeUp():void{
    this.signup =true;
    this.loginbut =false;
  }
  logIn():void{
    this.loginbut =true;
    this.signup =false;
  }
  
  
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
   // this.loggedIn = true;
/* 
    let userInfo =  JSON.parse(JSON.stringify(data));
    this.existingUser = userInfo;
    console.log("Userid: "+this.existingUser.id);
    this.login(this.existingUser.username,this.existingUser.password); */

    window.location.href = '/';

    //return
   })
   
  }

  login (pUserName:string, pPw:string,): void {
    const message = document.getElementById("loginmessage");

    this.user = {
      username: pUserName,
      password: pPw,

    }

    this.userService.loginUser(this.user)
        .subscribe(data => {
        
      let userInfo =  JSON.parse(JSON.stringify(data));
      this.existingUser = userInfo;
      sessionStorage.setItem('ID:', this.existingUser.id);
      sessionStorage.setItem('Name:', this.existingUser.firstName);
      console.log("User id:"+this.existingUser.id);
      this.loggedIn = true;
      console.log("in login " + sessionStorage.getItem("ID:"));
        window.location.href = '/';

       },(err) => {
          console.log("Error with Login");
          message.innerHTML="Error: Invalid Login Information!"

    });
  }

  logout(): void{
    sessionStorage.setItem('ID:', "" );
    sessionStorage.setItem('Name:', "");
    this.loggedIn = false;
    console.log("in logout " + this.loggedIn);
    window.location.href = '/';
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