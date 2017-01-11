import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-topics-all',
  templateUrl: './topics-all.component.html',
  styleUrls: ['./topics-all.component.css']
})
export class TopicsAllComponent implements OnInit {

  topics: any[]

  currentUser = localStorage

  constructor(
    private genre: GenresService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let genreId = +this.route.snapshot.params['id']
    let requestedUser = this.currentUser['userId']

    this.genre.fetchTopics(requestedUser, genreId).subscribe((data)=>{
      this.topics = data
    })

  }

}
