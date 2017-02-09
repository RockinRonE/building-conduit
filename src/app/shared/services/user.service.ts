import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service'; 
import { User } from '../models';



@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor (
    private apiService: ApiService,
    private http: Http,
    private jwtService: JwtService
  ) {}

  // Verify JWT in localStorage with server and load user's info
  // This runs once on app startup

  populate() {
    // If JWT detected, attempt to retrieve and store user's info

    if(this.jwtService.getToken()) {
      // utilize our newly created get(). (params are optional)
      this.apiService.get('/user')
        .subscribe(
          data => this.setAuth(data.user),
          err => this.purgeAuth()
          );
    } else {
      // Remove any potential remnants of prev auth states
      this.purgeAuth(); 
    }
  }

  setAuth(user: User) {
    // Save JWT sent from server in localStorage
    this.jwtService.saveToken(user.token); 
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  update(user): Observable<User> {
    return this.apiService.put('/user', { user })
      .map(data => {
        // Update currentUser observable
        this.currentUserSubject.next(data.user); 
        return data.user; 
      })
  }

  purgeAuth() {
    // Remove JWT from localStorage
    this.jwtService.destoryToken(); 
    // Set current user to empty object
    this.currentUserSubject.next(new User());
    // Set Auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(type, credentials): Observable<User> {
    let route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials})
    .map(
      data => {
        this.setAuth(data.user);
        return data;
      }
    );
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

}