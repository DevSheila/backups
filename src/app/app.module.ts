import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubAppComponent } from './github-app/github-app.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { GithubService } from './github.service';
import { DatePipe } from './date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubAppComponent,
    GithubProfileComponent,
    GithubReposComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
