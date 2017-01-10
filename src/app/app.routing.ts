import {NavbarComponent} from './navbar/navbar.component';
import {IndexComponent} from './index/index.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {AccountComponent} from './account/account.component';
import {UsersComponent} from './users/users.component';
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
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: AccountComponent
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
