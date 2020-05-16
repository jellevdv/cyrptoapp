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
  api_key = '4f7917f7b16a4a438143eb41a7bf30d5';


  constructor(private http: HttpClient) { }


  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
   }


   initArticles(){
    return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey='+this.api_key);
   }

   getArticlesByID(source: String){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
   }



}
