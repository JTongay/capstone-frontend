import {NavbarComponent} from './navbar/navbar.component';
import {IndexComponent} from './index/index.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {Routes, RouterModule } from "@angular/router";


const APP_ROUTES: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
