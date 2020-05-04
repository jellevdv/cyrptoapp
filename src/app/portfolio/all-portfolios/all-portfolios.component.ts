import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-portfolios',
  templateUrl: './all-portfolios.component.html',
  styleUrls: ['./all-portfolios.component.scss']
})
export class AllPortfoliosComponent implements OnInit {
  niewPortfolioMaken: boolean;

  constructor() { }

  ngOnInit(): void {
  }


  nieuwPortfolioClicked(): void{
    this.niewPortfolioMaken=true;
  }

  closeClicked():void{
    this.niewPortfolioMaken=false;
  }
}
