import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../news-data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  mArticles:Array<any>;
	mSources:Array<any>;


  constructor(private _data: NewsDataService) { }

  ngOnInit(): void {
 //load articles
 this._data.initArticles().subscribe(data => this.mArticles = data['articles']);
 //load news sources
 this._data.initSources().subscribe(data=> this.mSources = data['sources']);
  }

  searchArticles(source){
		console.log("selected source is: "+source);
		this._data.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
	}


}
