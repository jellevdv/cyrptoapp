import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin.model';
import { CoinDataService } from '../coin-data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
  private _fetchCoins$: Observable<Coin[]>= this._data.coins$;

  constructor( private _data: CoinDataService) { }

  ngOnInit(): void {
  }

  get coins$(): Observable<Coin[]> {
    return this._fetchCoins$;
  }


}
