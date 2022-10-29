import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewUser } from './user';


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
    return this.http.get<User>('http://localhost:3000/userdata/'+id);
  }

  loginUser(newUser: NewUser): Observable<string> {  // usin a post as I want to pass the data in the body
    return this.http.post<string>('http://localhost:3000/loginUser', newUser);
  }

  newUser(newUser: NewUser): Observable<User> {
    return this.http.post<User>('http://localhost:3000/newuser', newUser);
  }
}
