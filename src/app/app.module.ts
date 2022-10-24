import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignInComponent}  from './login/login.component';  
import { GoogleSigninComponent }  from './google.signin';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleSigninComponent,
    SignInComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
