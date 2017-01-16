import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsService } from '../forms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUp(form: NgForm){
    this.forms.submitNewUser(form.value).subscribe((data)=>{
      localStorage.setItem('loggedIn', 'true')
      localStorage.setItem('userName', data.json().username);
      localStorage.setItem('userId', data.json().id);
      this.router.navigate([''])
    });
  }

  constructor(
    private forms: FormsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
