import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  currentUser = localStorage

  userAccount: any;

  constructor(
    private user: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    let id = +this.route.snapshot.params['id']

    this.user.getOneUser(id).subscribe((user)=>{
      console.log(user)
      this.userAccount = user
    })
  }

}
