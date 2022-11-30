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
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  getUser(id: string): Observable<User> {
    return this.http.get<User>('http://localhost:3000/users/'+id);
  }

  loginUser(newUser: loginUser): Observable<string> {  // usin a post as I want to pass the data in the body
    return this.http.post<string>('http://localhost:3000/login', newUser);
  }

  newUser(newUser: NewUser): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users/create', newUser);
  }
  
  updateUser(user:User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users/update_user/',user);
  }

  getLongLat(address: string): Observable<any> {
    let observable = this.http.get<any>('https://maps.googleapis.com/maps/api/geocode/json?address='+ address + '&key=AIzaSyDlcVUDD3WhvXXA2XvrTflCjMn0VO3Bam8');

    return observable;

  }

  getPlacesNode(searchObject: any): Observable<any> {
    let observable = this.http.post<any>('http://localhost:3000/users/get-places', searchObject);
    console.log("Node place result: ", observable);

    return observable;
  }

  getPlace(placeId: string): Observable<any> {
    console.log("going to:'http://localhost:3000/users/get-place/id/"+placeId);
    return this.http.get<any>('http://localhost:3000/users/get-place/id/'+placeId);
  //  console.log("Node place result: ", observable);

   // return observable;
  }

  getPlacesAdvanced(keyword: string, latitude: string, longitude: string, radius: string, type: string): Observable<any> {

    let observable = this.http.get<any>('https://cors-prefix.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword='+ keyword +'&location='+ latitude +'%2C'+ longitude +'&radius='+ radius +'&type='+ type +'&key=AIzaSyBKuuHUPZ_BDWlCnLSYPylkTCd7LQpsU6s');
    
    return observable;
  }

  getPlaces(): Observable<any> {

    let observable = this.http.get<any>('https://cors-prefix.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=cruise&location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=detailsKEY=AIzaSyAq8gX10e_a_1ojTNAxnN3jmQar4bBGtd4');
    
  //  let promise = observable.toPromise();

   // let data = promise.then((res) => {console.log("DATA Result: " + JSON.stringify(res))});
    
   // console.log("The observable: " + observable);

  //  console.log("The promise: " + promise);
    
    return observable;
  }

  getImage(imgref:string): Observable<any> {

    let observable = this.http.get<any>('https://maps.googleapis.com/maps/api/place/photo?maxwidth=50&photo_reference='+imgref+'&key=AIzaSyDlcVUDD3WhvXXA2XvrTflCjMn0VO3Bam8');

    return observable;
  }

  postResults(ansObject: any): Observable<any> {
    console.log("test user service", ansObject);
    return this.http.post<any>('http://localhost:3000/users/submit-quiz', ansObject);
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
//     return this.http.post<any>('http://localhost:3000/users/add-favorite', {uid: uid, place: place});
//   }
 addPlaceToFavorite(favObject: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/users/add-place-to-favorite', favObject);
  }
  
  getFavoritePlace(place: any ): Observable<any> {
    return this.http.get<any>('http://localhost:3000/users/get-favorite-place'+ place);
  }
 
}
