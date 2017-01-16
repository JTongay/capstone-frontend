import { Component, OnInit } from '@angular/core';
import { IndexComponent } from '../index/index.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  entryComponents: [IndexComponent]
})
export class NavbarComponent implements OnInit {
  title = 'app works!';

  currentUser = localStorage

  logOut(){
    this.currentUser.removeItem('loggedIn')
    this.currentUser.removeItem('userId')
    this.currentUser.removeItem('userName')
    console.log('logout')
    this.router.navigate(['login'])
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
