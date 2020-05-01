import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from '../coin.model';
import { CoinDataService } from '../coin-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private _fetchCoins$: Observable<Coin[]>= this._data.coins$;

  constructor(private _data: CoinDataService) { }

  ngOnInit(): void {
  }

  get coins$(): Observable<Coin[]> {
    return this._fetchCoins$;
  }



}
