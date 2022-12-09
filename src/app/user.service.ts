import { Injectable } from '@angular/core';
import { User } from './user';
import { observable, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewUser, loginUser} from './user';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  geoObject: any

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<User[]> {
    //https://wheresnextws.azurewebsites.net/
    //return this.http.get<User[]>('https://wheresnextnode.azurewebsites.net/users');
    return this.http.get<User[]>('https://wheresnextws.azurewebsites.net/users');
  
  }
  getUser(id: string): Observable<User> {
    //return this.http.get<User>('https://wheresnextnode.azurewebsites.net/users/'+id);
    return this.http.get<User>('https://wheresnextws.azurewebsites.net/users/'+id);
  }

  loginUser(newUser: loginUser): Observable<string> {  // usin a post as I want to pass the data in the body
    console.log("We are gonna go to this url"+'https://wheresnextnode.azurewebsites.net/login');
    //return this.http.post<string>('https://wheresnextnode.azurewebsites.net/login', newUser);
    return this.http.post<string>('http://localhost:3000/login', newUser);
    //return this.http.post<string>('https://wheresnextws.azurewebsites.net/login', newUser);
  }

  newUser(newUser: NewUser): Observable<User> {
    //return this.http.post<User>('https://wheresnextnode.azurewebsites.net/users/create', newUser);
    return this.http.post<User>('https://wheresnextws.azurewebsites.net/users/create', newUser);
  }
  
  updateUser(user:User): Observable<User> {
    //return this.http.post<User>('https://wheresnextnode.azurewebsites.net/users/update_user/',user);
    return this.http.post<User>('https://wheresnextws.azurewebsites.net/users/update_user/',user);
  }


  getPlacesNode(searchObject: any): Observable<any> {
    //let observable = this.http.post<any>('https://wheresnextnode.azurewebsites.net/users/get-places', searchObject);
    let observable = this.http.post<any>('http://localhost:3000/users/get-places', searchObject);
    //let observable = this.http.post<any>('https://wheresnextws.azurewebsites.net/users/get-places', searchObject);
    console.log("Node place result: ", observable);

    return observable;
  }

  getPlace(placeId: string): Observable<any> {
    //console.log("going to:'https://wheresnextnode.azurewebsites.net/users/get-place/id/"+placeId);
    //return this.http.get<any>('https://wheresnextnode.azurewebsites.net/users/get-place/id/'+placeId);
    return this.http.get<any>('https://wheresnextws.azurewebsites.net/users/get-place/id/'+placeId);
  //  console.log("Node place result: ", observable);

   // return observable;
  }

  getPlacesAdvanced(ParamObject: any): Observable<any> {

    console.log("ParamObject type in method: ", ParamObject);
    //let observable = this.http.post<any>('https://wheresnextnode.azurewebsites.net/users/get-places-advanced', ParamObject);
    //let observable = this.http.post<any>('http://localhost:3000/users/get-places-advanced', ParamObject);
    let observable = this.http.post<any>('https://wheresnextws.azurewebsites.net/users/get-places-advanced', ParamObject);
   
    return observable;
  }


  postResults(ansObject: any): Observable<any> {
    console.log("test user service", ansObject);
    //return this.http.post<any>('https://wheresnextnode.azurewebsites.net/users/submit-quiz', ansObject);
    return this.http.post<any>('https://wheresnextws.azurewebsites.net/users/submit-quiz', ansObject);
  }

  setGeo(geoObject: any) {
    this.geoObject = geoObject;
  }

  getGeo(): any {
    return this.geoObject;
  }

  // addPlaceToFavorites from places component
  
  

//  addFavorite(uid, place): Observable<any> {
//     console.log("test user service", uid, place);
//     return this.http.post<any>('https://wheresnextnode.azurewebsites.net/users/add-favorite', {uid: uid, place: place});
//   }
 addPlaceToFavorite(favObject: any): Observable<any> {
    //return this.http.post<any>('https://wheresnextnode.azurewebsites.net/users/add-place-to-favorite', favObject);
    return this.http.post<any>('https://wheresnextws.azurewebsites.net/users/add-place-to-favorite', favObject);
  }
  
  getFavoritePlace(place: any ): Observable<any> {
    //return this.http.get<any>('https://wheresnextnode.azurewebsites.net/users/get-favorite-place'+ place);
    return this.http.get<any>('https://wheresnextws.azurewebsites.net/users/get-favorite-place'+ place);
  }
  removeFavoritePlace(RemfavObject: any ): Observable<any> {
   //return this.http.post<any>('https://wheresnextnode.azurewebsites.net/users/remove-favorite', RemfavObject);
   return this.http.post<any>('https://wheresnextws.azurewebsites.net/users/remove-favorite', RemfavObject);
  }
 
}
