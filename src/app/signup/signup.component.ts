import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsService } from '../forms.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUp(form: NgForm){
    console.log(form.value)
    this.forms.submitNewUser(form.value).subscribe((data)=>{
      console.log(data.json())
      localStorage.setItem('loggedIn', 'true')
      console.log(localStorage)
    });
  }

  constructor(private forms: FormsService) { }

  ngOnInit() {
  }

}
