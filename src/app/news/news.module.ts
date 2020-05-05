import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IArticle,} from 'crypto-news-api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    NewsModule
  ]
})
export class NewsModule { }
