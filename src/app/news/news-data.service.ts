import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article.model';
import { map,tap, shareReplay, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";



@Injectable({
  providedIn: 'root'
})
export class NewsDataService {
  handleError(handleError: any): import("rxjs").OperatorFunction<any, any> {
    throw new Error("Method not implemented.");
  }
  private _topArticles: any;


  constructor(private _http: HttpClient) { }


  getArticles() {

    return this._http
      .get(
        "http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-05&sortBy=publishedAt&apiKey=1c452bc507eaf0b876079c353d2364d8"
      )
      .map((result) => (this._topArticles = result));
  }

  get articles$(): Observable<Article[]> {
    return this._http.get("http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-05&sortBy=publishedAt&apiKey=1c452bc507eaf0b876079c353d2364d8")
    .pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Article[] => list.map(Article.fromJSON))
    );
  }


}
