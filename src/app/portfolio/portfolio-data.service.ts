import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio.model';
import { environment } from 'src/environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { shareReplay, tap, catchError, map, switchMap } from 'rxjs/operators';
import { PortCoin } from './portfcoin.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  private _reloadPortCoins$ = new BehaviorSubject<boolean>(true);

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
      .pipe(catchError(this.handleError), map(Portfolio.fromJSON)); // returns just one recipe, as json
  }

  addNewPortfolio(portfolio: Portfolio) {
    return this.http
      .post(`${environment.apiUrl}/portfolios/add=${portfolio.name}`,portfolio.toJSON())
      .pipe(catchError(this.handleError));
  }

/*
  getPortCoins$(name: string) {
    return this._reloadPortCoins$.pipe(
      switchMap(() => this.fetchPortCoins$(name))
    );
  }
*/
/*
  fetchPortCoins$(name?: string) {
    let params = new HttpParams();
    params = name ? params.append('get=', name) : params;
    return this.http.get(`${environment.apiUrl}/portfolios/`, { params }).pipe(
      catchError(this.handleError),
      map((list: any[]): PortCoin[] => list.map(PortCoin.fromJSON))
    );
  }
  */
/*
 fetchPortCoins$(name: string) {
  return this.http.get(`${environment.apiUrl}/portfolios/get=${name}`).pipe(
    catchError(this.handleError),
    map((list: any[]): PortCoin[] => list.map(PortCoin.fromJSON))
  );
}
*/
fetchPortCoins$(portfolioName: string):Observable<PortCoin[]>  {
  if(portfolioName==""){
    return new Observable<PortCoin[]>();
  }else{
    return this.http.get(`${environment.apiUrl}/portfolios/get=${{portfolioName}}`).pipe(
      tap(console.log),
      catchError(this.handleError),
      map((list: any[]): PortCoin[] => list.map(PortCoin.fromJSON))
    );
  }

}


get portcoinsOfPortfolio$(): Observable<PortCoin[]> {
  return this.http.get(`${environment.apiUrl}/portfolios/get=Main`).pipe(
    tap(console.log),
    catchError(this.handleError),
    map((list: any[]): PortCoin[] => list.map(PortCoin.fromJSON))
  );
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
