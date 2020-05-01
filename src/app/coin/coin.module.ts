import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {Coin} from './coin.model';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CoinDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [
    Coin, NavbarComponent
  ]
})
export class CoinModule { }
