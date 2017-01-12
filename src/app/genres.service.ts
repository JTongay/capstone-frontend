import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GenresService {

  log(){
    console.log("I'm from the genres service")
  }

  constructor(private http:Http) { }

  addNewGenre(userId: any, data: any){
    return this.http
    .post("https://cryptic-island-60223.herokuapp.com/api/users/" + userId + "/genres/new", data)
  }

  fetchGenres(userId: any){
    return this.http.get("https://cryptic-island-60223.herokuapp.com/api/users/" + userId + "/genres/").map((response: Response)=>{
      return response.json();
    })
  }

  fetchTopics(userId: any, genreId: any){
    return this.http
    .get("https://cryptic-island-60223.herokuapp.com/api/users/" + userId + "/genres/" + genreId + "/topics").map((response: Response)=>{
      return response.json();
    })
  }

  fetchSingleTopic(userId: any, genreId: any, topicId: any){
    return this.http
    .get("https://cryptic-island-60223.herokuapp.com/api/users/" + userId + "/genres/" + genreId + "/topics/" + topicId).map((response: Response)=>{
      return response.json();
    })
  }

  fetchSingleTopicTop(userId: any, genreId: any, topicId: any){
    return this.http
    .get("https://cryptic-island-60223.herokuapp.com/api/users/" + userId + "/genres/" + genreId + "/topics/" + topicId + "/subjects/top").map((response: Response)=>{
      return response.json();
    })
  }

  fetchSingleTopicAll(userId: any, genreId: any, topicId: any) {
    return this.http
    .get("https://cryptic-island-60223.herokuapp.com/api/users/" + userId + "/genres/" + genreId + "/topics/" + topicId + "/subjects/").map((response: Response)=>{
      return response;
    })
  }

}
