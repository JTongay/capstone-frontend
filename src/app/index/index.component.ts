import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { GenresService } from '../genres.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectModule } from 'angular2-select';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnChanges, AfterViewInit {


  currentUser: any = localStorage

  genre: FormGroup

  genres: any[];

  ngAfterViewInit(){
    !function(d,s,id){
                var js: any,
                    fjs=d.getElementsByTagName(s)[0],
                    p='https';
                if(!d.getElementById(id)){
                    js=d.createElement(s);
                    js.id=id;
                    js.src=p+"://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js,fjs);
                }
            }
            (document,"script","twitter-wjs");
  }

  ngOnChanges(){

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
