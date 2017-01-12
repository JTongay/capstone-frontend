import { Component, OnInit } from '@angular/core';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  entryComponents: [IndexComponent]
})
export class NavbarComponent implements OnInit {
  title = 'app works!';

  currentUser = localStorage

  constructor() { }

  ngOnInit() {
  }

}
