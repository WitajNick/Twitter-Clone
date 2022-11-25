import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TweetMenuComponent } from '../tweet-menu/tweet-menu.component';
import { FeedComponent } from '../feed/feed.component';



@NgModule({
  declarations: [
    HomeComponent,
    TweetMenuComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
