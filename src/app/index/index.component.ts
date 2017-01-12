import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectModule } from 'angular2-select';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  currentUser: any = localStorage

  genre: FormGroup

  genres: any[];

  addGenre(data){
    let requestedUser = this.currentUser['userId']
    console.log(data.value.name.toUpperCase())

    // this.fetcher.addNewGenre(requestedUser, data.value).subscribe((genre)=>{
    //   console.log(genre)
    // })

  }

  constructor(
    private fetcher: GenresService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,  ) {

      this.genre = this.fb.group({
        name: ''
      })

    }

  ngOnInit() {
    this.fetcher.fetchGenres(this.currentUser.userId).subscribe(
      (data)=>{
        this.genres = data;
      }
    )

  }

}
