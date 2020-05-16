import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin.model';
import { ActivatedRoute } from '@angular/router';
import { CoinDataService } from '../coin-data.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {
  public coin: Coin;
  public error: string;

  constructor(
     private route: ActivatedRoute,
     private _data: CoinDataService) { }


  ngOnInit(): void {
   this.loadCoin();
  }

  loadCoin(){
    const coinID=this.route.snapshot.paramMap.get('id');
    this._data.getCoin$(coinID).subscribe(
      data=> this.coin=data,
      error => this.error=error
    )
  }


}
