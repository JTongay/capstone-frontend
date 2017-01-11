import {NavbarComponent} from './navbar/navbar.component';
import {IndexComponent} from './index/index.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {AccountComponent} from './account/account.component';
import {UsersComponent} from './users/users.component';
import { TopicsAllComponent } from './topics-all/topics-all.component';
import { TopicSingleComponent } from './topic-single/topic-single.component';
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
  },
  {
    path: 'genres/:id/topics',
    component: TopicsAllComponent
  },{
    path: 'genres/:genre_id/topics/:id',
    component: TopicSingleComponent
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
