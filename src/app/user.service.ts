import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  getAllUsers(){
    return this.http
    .get("https://cryptic-island-60223.herokuapp.com/api/users/").map((res)=>{
      return res.json()
    })
  }

  getOneUser(userId){
    return this.http.get("https://cryptic-island-60223.herokuapp.com/api/users/" + userId).map((res)=>{
      return res.json()
    })
  }



  constructor(private http: Http) { }

}
