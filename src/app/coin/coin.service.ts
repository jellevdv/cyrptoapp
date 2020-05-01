import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Coin } from './coin.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private _http: HttpClient) {
  }

  get coins$(): Observable<Coin[] >{
    //nog error execption fixen h4 dia 134
    return this._http.get(`${environment.apiUrl}/Coins/`).
      map(
        (list: any[]): Coin[] => list.map(Coin.fromJSON)
      )
  }

}
