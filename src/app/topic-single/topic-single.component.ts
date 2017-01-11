import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-topic-single',
  templateUrl: './topic-single.component.html',
  styleUrls: ['./topic-single.component.css']
})
export class TopicSingleComponent implements OnInit {

  topThree: any;
  bottom: any;
  currentUser: any = localStorage;
  chosenTopic: any;

  public pieChartLabels:string[] = [];
  public pieChartData:any[] = [];
  public pieChartType:string = 'pie';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  // public chartHovered(e:any):void {
  //   console.log(e);
  // }

  constructor(
    private genre: GenresService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let genreId = +this.route.snapshot.params['genre_id']
    let topicId = +this.route.snapshot.params['id']
    let requestedUser = this.currentUser['userId']

    this.genre.fetchSingleTopicTop(requestedUser, genreId, topicId).subscribe((data)=>{
      console.log(data)
      this.topThree = data
      this.topThree.forEach((item)=>{
        this.pieChartLabels.push(item.name)
        let scoreInt = parseInt(item.score)
        this.pieChartData.push(scoreInt)
      })
    })

    this.genre.fetchSingleTopic(requestedUser, genreId, topicId).subscribe((data)=>{
      console.log(data)
      this.chosenTopic = data
    })


  }

}
