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

  constructor(
     private route: ActivatedRoute,
     private coinDataService: CoinDataService) { }

  ngOnInit(): void {
    this.route.data.subscribe(item => (this.coin = item['coin']));
  }


}
