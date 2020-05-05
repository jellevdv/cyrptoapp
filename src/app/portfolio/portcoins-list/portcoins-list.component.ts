import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';
import { Observable } from 'rxjs';
import { PortCoin } from '../portfcoin.model';

@Component({
  selector: 'app-portcoins-list',
  templateUrl: './portcoins-list.component.html',
  styleUrls: ['./portcoins-list.component.scss']
})
export class PortcoinsListComponent implements OnInit {
  private _fetchPortCoins$: Observable<PortCoin[]>;

  constructor(private _data: PortfolioDataService) { }

  ngOnInit(): void {
  }

  get portCoins$(): Observable<PortCoin[]> {
    return this._fetchPortCoins$;
  }


}
