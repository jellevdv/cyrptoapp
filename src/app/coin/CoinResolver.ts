import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Coin } from './coin.model';
import { Injectable } from '@angular/core';
import { CoinDataService } from './coin-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinResolver implements Resolve<Coin> {
  constructor(private coinService: CoinDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Coin> {
    return this.coinService.getCoins$(route.params['id']);
  }
}
