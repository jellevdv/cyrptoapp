import { Injectable, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { map, catchError, tap, shareReplay, switchMap } from 'rxjs/operators';
import { Coin } from './coin.model';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoinDataService {

  constructor(private http: HttpClient) {}

  get coins$(): Observable<Coin[]> {
    return this.http.get(`${environment.apiUrl}/coins/`).pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Coin[] => list.map(Coin.fromJSON))
    );
  }

  getCoin$(id: string): Observable<Coin> {
    return this.http
      .get(`${environment.apiUrl}/coins/get=${id}`)
      .pipe(catchError(this.handleError), map(Coin.fromJSON)); // returns just one recipe, as json
  }



  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else if (err instanceof HttpErrorResponse) {
      console.log(err);
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = err;
    }
    return throwError(errorMessage);
  }
}
