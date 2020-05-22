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
  public totalValue:number=1575.61;




  constructor(private _data: PortfolioDataService) {

  }

  ngOnInit(): void {

  }

  deleteClicked(element: number):void{
    document.getElementById(element.toString()).remove();
    switch(element){
      case(1): this.totalValue-=435.45;
      case(2): this.totalValue-=150.24;
      case(3): this.totalValue-=989.92;
    }
  }

//hier nog invullen met gekozen portfolio
  get portCoins$(): Observable<PortCoin[]> {
    console.log("get portcoins aangesproken");
   // console.log(this._fetchPortCoins$);
     return this._fetchPortCoins$;
  }

}



