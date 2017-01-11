import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  currentUser: any = localStorage

  genres: any[];

  constructor(private fetcher: GenresService) { }

  logIt(){
    this.fetcher.log();
  }

  ngOnInit() {
    this.fetcher.fetchGenres(this.currentUser.userId).subscribe(
      (data)=>{
        this.genres = data;
      }
    )

  }

}
