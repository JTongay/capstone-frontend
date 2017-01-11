import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';

//Import services
import { GenresService } from './genres.service';
import { FormsService } from './forms.service';
import { UserService } from "./user.service";


//Import routing
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { UsersComponent } from './users/users.component';
import { TopicsAllComponent } from './topics-all/topics-all.component';
import { TopicSingleComponent } from './topic-single/topic-single.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    SignupComponent,
    LoginComponent,
    AccountComponent,
    UsersComponent,
    TopicsAllComponent,
    TopicSingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    routing
  ],
  providers: [GenresService, FormsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
