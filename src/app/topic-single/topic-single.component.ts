import { Component, OnInit, OnChanges, ChangeDetectorRef, ChangeDetectionStrategy, SimpleChange } from '@angular/core';
import { GenresService } from '../genres.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from '../forms.service';



@Component({
  selector: 'app-topic-single',
  templateUrl: './topic-single.component.html',
  styleUrls: ['./topic-single.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicSingleComponent implements OnInit, OnChanges {

  topThree: any;
  bottom: any;
  currentUser: any = localStorage;
  chosenTopic: any;
  allSubjects: any;
  formShow: boolean = false;
  subject: FormGroup;


  showForm(){
    this.formShow = !this.formShow
  }

  public pieChartLabels:string[] = [];
  public pieChartData:any[] = [];
  public pieChartType:string = 'pie';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  addNewSubject(data){
    let genreId = +this.route.snapshot.params['genre_id']
    let topicId = +this.route.snapshot.params['id']
    let requestedUser = this.currentUser['userId']
    this.forms.addNewSubject(requestedUser, genreId, topicId, data.value).subscribe((returned)=>{
      console.log(returned.json())
      console.log('booyah')
      this.genre.fetchSingleTopicAll(requestedUser, genreId, topicId).subscribe((data)=>{
        console.log(data.json())
        this.allSubjects = data.json()
        this.ref.markForCheck();
      })

    })
  }

  constructor(
    private genre: GenresService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private forms: FormsService,
    private ref: ChangeDetectorRef
  ) {
    this.subject = this.fb.group({
      name: ''
    })

    this.ref.markForCheck();
  }

  ngOnChanges(changes: {[allSubjects: string]: SimpleChange}): void{
    console.log(changes)
  }

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
        this.ref.markForCheck();
      })
      // console.log(this.ref.detectChanges)
    },
    null,
    ()=>{
      console.log('on completed yo')
      this.ref.markForCheck();
  })

    this.genre.fetchSingleTopic(requestedUser, genreId, topicId).subscribe((data)=>{
      console.log(data)
      this.chosenTopic = data
    })

    this.genre.fetchSingleTopicAll(requestedUser, genreId, topicId).subscribe((data)=>{
      console.log(data.json())
      this.allSubjects = data.json()
      this.ref.markForCheck();
    })


  }

}
