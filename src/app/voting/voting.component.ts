import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectModule } from 'angular2-select';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  currentUser: any = localStorage;
  allSubjects: any;
  subjectsArr: any[];

  votes: FormGroup

  castVote(data){
    let genreId = +this.route.snapshot.params['genre_id']
    let topicId = +this.route.snapshot.params['id']
    let requestedUser = this.currentUser['userId']
    console.log(data.value)
    this.forms.submitVote(requestedUser, genreId, topicId, data.value).subscribe((returned)=>{
      console.log(returned)
      this.router.navigate(['genres', genreId, 'topics', topicId])
    })
  }

  constructor(
    private genre: GenresService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private forms: FormsService
  ) {
    this.votes = this.fb.group({
      first: '',
      second: '',
      third: '',
      garbage: ''
    })
    console.log(this.votes)
   }

  ngOnInit() {
    let genreId = +this.route.snapshot.params['genre_id']
    let topicId = +this.route.snapshot.params['id']
    let requestedUser = this.currentUser['userId']

    this.genre.fetchSingleTopicAll(requestedUser, genreId, topicId).subscribe((data)=>{
      this.allSubjects = data.json();
      console.log(this.allSubjects)
    })


  }

}
