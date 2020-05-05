import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../news-data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  objectKeys = Object.keys;
  articles: any;

  constructor(private _data: NewsDataService) { }

  ngOnInit(): void {
    this._data.getArticles()
      .subscribe(res => {
        this.articles = res;
        //console.log(res);
      });
  }


}
