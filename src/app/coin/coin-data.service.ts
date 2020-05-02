import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap, shareReplay, switchMap } from 'rxjs/operators';
import { Coin } from './coin.model';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoinDataService {
  private _coins$ = new BehaviorSubject<Coin[]>([]);
  private _coins: Coin[];

  constructor(private http: HttpClient) {
    this._coins$
      .pipe(
        catchError((err) => {
          this._coins$.error(err);
          return throwError(err);
        })
      )
      .subscribe((coins: Coin[]) => {
        this._coins = coins;
        this._coins$.next(this._coins);
      });
  }

  get allCoins$(): Observable<Coin[]> {
    return this._coins$;
  }

  get coins$(): Observable<Coin[]> {
    return this.http.get(`${environment.apiUrl}/coins`).pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Coin[] => list.map(Coin.fromJSON))
    );
  }

  getCoins$(name: string): Observable<Coin> {
    return this.http
      .get(`${environment.apiUrl}/coins/get=${name}`)
      .pipe(catchError(this.handleError), map(Coin.fromJSON)); // returns just one coin, as json
  }

  /*
  addNewCoin(coin: Coin) {
    return this.http
      .post(`${environment.apiUrl}/recipes/`, recipe.toJSON())
      .pipe(catchError(this.handleError), map(Recipe.fromJSON))
      .pipe(
        // temporary fix, while we use the behaviorsubject as a cache stream
        catchError((err) => {
          this._recipes$.error(err);
          return throwError(err);
        }),
        tap((rec: Recipe) => {
          this._recipes = [...this._recipes, rec];
          this._recipes$.next(this._recipes);
        })
      );
  }


  deleteRecipe(recipe: Recipe) {
    return this.http
      .delete(`${environment.apiUrl}/recipes/${recipe.id}`)
      .pipe(tap(console.log), catchError(this.handleError))
      .subscribe(() => {
        this._recipes = this._recipes.filter((rec) => rec.id != recipe.id);
        this._recipes$.next(this._recipes);
      });
  }
  */

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
