import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [NavbarComponent]
})
export class AppComponent {
  title = 'app works!';
  booyah = 'booyah';
}
