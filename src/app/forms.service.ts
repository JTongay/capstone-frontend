import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FormsService {

  constructor(private http: Http) { }

  submitNewUser(user: any){
    return this.http
    .post("https://cryptic-island-60223.herokuapp.com/api/users/signup", user)
  }

  getUserToken(user: any){
    return this.http
    .post("https://cryptic-island-60223.herokuapp.com/api/users/login", user)
  }

}
