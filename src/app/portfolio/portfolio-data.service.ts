import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio.model';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { shareReplay, tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

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
      .post(`${environment.apiUrl}/portfolios/`,portfolio.toJSON())
      .pipe(catchError(this.handleError));
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
