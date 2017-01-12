import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import { GenresService } from '../genres.service';
// import { Router, ActivatedRoute, Params } from '@angular/router';
// import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { SelectModule } from 'angular2-select';
// import { FormsService } from '../forms.service';

@Component({
  selector: 'app-ballot-form',
  templateUrl: './ballot-form.component.html',
  styleUrls: ['./ballot-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BallotFormComponent implements OnInit {

  // allSubjects: any;
  // currentUser = localStorage;
  // subject: FormGroup
  //
  // addNewSubject(data){
  //   let genreId = +this.route.snapshot.params['genre_id']
  //   let topicId = +this.route.snapshot.params['id']
  //   let requestedUser = this.currentUser['userId']
  //   this.forms.addNewSubject(requestedUser, genreId, topicId, data.value).subscribe((returned)=>{
  //     console.log(returned)
  //     console.log('booyah')
  //     this.router.navigate(['genres', genreId, 'topics', topicId])
  //   })
  // }
  //
  constructor(){}
  //   private genre: GenresService,
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private fb: FormBuilder,
  //   private forms: FormsService
  // ) {
  //   this.subject = this.fb.group({
  //     name: ''
  //   })
  //  }
  //
  ngOnInit() {
    // let genreId = +this.route.snapshot.params['genre_id']
    // let topicId = +this.route.snapshot.params['id']
    // let requestedUser = this.currentUser['userId']
    //
    // this.genre.fetchSingleTopicAll(requestedUser, genreId, topicId).subscribe((data)=>{
    //   this.allSubjects = data.json();
    //   console.log(this.allSubjects)
    // })
  }

}
