import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GenresService } from '../genres.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-topics-all',
  templateUrl: './topics-all.component.html',
  styleUrls: ['./topics-all.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TopicsAllComponent implements OnInit {

  topics: any[]

  currentUser = localStorage

  topic: FormGroup

  addTopic(data){
    let genreId = +this.route.snapshot.params['id']
    let requestedUser = this.currentUser['userId']
    console.log(data.value)
    this.forms.addNewTopic(requestedUser, genreId, data.value).subscribe((topic)=>{
      console.log(topic.json())
      this.genre.fetchTopics(requestedUser, genreId).subscribe((data)=>{
        this.topics = data
      })
    })
  }

  constructor(
    private genre: GenresService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private forms: FormsService
  ) {

    this.topic = this.fb.group({
      title: ''
    })

   }

  ngOnInit() {
    let genreId = +this.route.snapshot.params['id']
    let requestedUser = this.currentUser['userId']

    this.genre.fetchTopics(requestedUser, genreId).subscribe((data)=>{
      this.topics = data
    })

  }

}
