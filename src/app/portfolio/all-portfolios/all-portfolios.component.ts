import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';
import { Portfolio } from '../portfolio.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-portfolios',
  templateUrl: './all-portfolios.component.html',
  styleUrls: ['./all-portfolios.component.scss']
})
export class AllPortfoliosComponent implements OnInit {
  private _fetchPortfolios$: Observable<Portfolio[]>= this._data.portfolios$;
  niewPortfolioMaken: boolean;

  constructor(private _data: PortfolioDataService) { }

  ngOnInit(): void {
  }


  get portfolios$(): Observable<Portfolio[]> {
    return this._fetchPortfolios$;
  }

  nieuwPortfolioClicked(): void{
    this.niewPortfolioMaken=true;
  }

  closeClicked():void{
    this.niewPortfolioMaken=false;
  }
}
