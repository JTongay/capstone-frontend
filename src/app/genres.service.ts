import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GenresService {

  log(){
    console.log("I'm from the genres service")
  }

  constructor(private http:Http) { }

  fetchGenres(){
    return this.http.get("https://cryptic-island-60223.herokuapp.com/api/genres/").map((response: Response)=>{
      return response.json();
    })
  }

}
