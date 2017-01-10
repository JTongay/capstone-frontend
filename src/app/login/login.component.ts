import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsService } from '../forms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private forms: FormsService,
    private router: Router
  ) { }

  logIn(form: NgForm){
    this.forms.getUserToken(form.value).subscribe((data)=>{
      localStorage.setItem('loggedIn', 'true')
      localStorage.setItem('userName', data.json().username);
      localStorage.setItem('userId', data.json().id);
      this.router.navigate([''])
    })
  }

  ngOnInit() {
  }

}
