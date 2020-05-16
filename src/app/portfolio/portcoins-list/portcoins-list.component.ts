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
  @Input() portfolioNaam:string="Main";
  public _fetchPortCoins$: Observable<PortCoin[]>=this._data.fetchPortCoins$("Main");
  public error:string;




  constructor(private _data: PortfolioDataService) {
  }

  ngOnInit(): void {
  }

//hier nog invullen met gekozen portfolio
  get portCoins$(): Observable<PortCoin[]> {
    console.log("get portcoins aangesproken");
   // console.log(this._fetchPortCoins$);
     return this._fetchPortCoins$;
  }

}



