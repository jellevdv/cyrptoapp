import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio.model';
import { environment } from 'src/environments/environment';
import { Observable, throwError, BehaviorSubject, pipe } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { shareReplay, tap, catchError, map, switchMap } from 'rxjs/operators';
import { PortCoin } from './portfcoin.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  private _reloadPortCoins$ = new BehaviorSubject<boolean>(true);
  public portcoins=new Observable<PortCoin[]>();

  constructor(private http: HttpClient) { }

  get portfolios$(): Observable<Portfolio[]> {
    return this.http.get(`${environment.apiUrl}/portfolios/portfolios`).pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Portfolio[] => list.map(Portfolio.fromJSON))
    );

  }


  getportfolio$(name: string): Observable<Portfolio> {
    return this.http
      .get(`${environment.apiUrl}/portfolios/get=${name}`)
      .pipe(catchError(this.handleError), map(Portfolio.fromJSON));
  }

  addNewPortfolio(portfolio: Portfolio) {
    return this.http
      .post(`${environment.apiUrl}/portfolios/add=${portfolio.name}`,portfolio.toJSON())
      .pipe(catchError(this.handleError));
  }


deletePortfolio(portfolio: Portfolio) {
  return this.http
    .delete(`${environment.apiUrl}/portfolios/delete=${portfolio.name}`)
    .pipe(tap(console.log), catchError(this.handleError))
    .subscribe(() => {
      this._reloadPortCoins$.next(true);
    });
}

fetchPortCoins$(portfolioName: string):Observable<PortCoin[]>  {

  console.log("Fetchportcoins aangeroepen 1");
  if(portfolioName==""){
    console.log("Fetchportcoins aangeroepen empty");
    return new Observable<PortCoin[]>();
   }else{
    console.log("Fetchportcoins aangeroepen main");


    return this.http
      .get(`${environment.apiUrl}/portfolios/get=Main`)
      .pipe(tap(console.log),catchError(this.handleError), map(Portfolio.fromJSON))
       .pipe(map(p=>p.coinsOfPortfolio));

  }

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
