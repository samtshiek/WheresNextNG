import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewUser, loginUser } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  getUser(id: number): Observable<User> {
    return this.http.get<User>('http://localhost:3000/user:/'+id);
  }

  loginUser(newUser: loginUser): Observable<string> {  // usin a post as I want to pass the data in the body
    return this.http.post<string>('http://localhost:3000/login', newUser);
  }

  newUser(newUser: NewUser): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users/create', newUser);
  }

  getPlacesAdvanced(keyword: string, latitude: string, longitude: string, radius: string, type: string): Observable<any> {

    let observable = this.http.get<any>('https://cors-prefix.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword='+ keyword +'&location='+ latitude +'%2C'+ longitude +'&radius='+ radius +'&type='+ type +'&key=AIzaSyBKuuHUPZ_BDWlCnLSYPylkTCd7LQpsU6s');
    
    return observable;
  }

  getPlaces(): Observable<any> {

    let observable = this.http.get<any>('https://cors-prefix.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=cruise&location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=AIzaSyBKuuHUPZ_BDWlCnLSYPylkTCd7LQpsU6s');
    
  //  let promise = observable.toPromise();

   // let data = promise.then((res) => {console.log("DATA Result: " + JSON.stringify(res))});
    
   // console.log("The observable: " + observable);

  //  console.log("The promise: " + promise);
    
    return observable;
  }
}
