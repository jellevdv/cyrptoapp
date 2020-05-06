import { Component, OnInit, Input } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';
import { Observable } from 'rxjs';
import { PortCoin } from '../portfcoin.model';
import { Portfolio } from '../portfolio.model';

@Component({
  selector: 'app-portcoins-list',
  templateUrl: './portcoins-list.component.html',
  styleUrls: ['./portcoins-list.component.scss']
})
export class PortcoinsListComponent implements OnInit {
  @Input() portfolioNaam:string="error";
  public _fetchPortCoins$: Observable<PortCoin[]>;

  constructor(private _data: PortfolioDataService) { }

  ngOnInit(): void {
    this._fetchPortCoins$=this._data.portcoinsOfPortfolio$;
  }

//hier nog invullen met gekozen portfolio
  get portCoins$(): Observable<PortCoin[]> {
     return this._data.portcoinsOfPortfolio$;
  }

}



