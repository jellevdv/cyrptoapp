import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {Coin} from './coin.model';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinResolver } from './CoinResolver';
import { Routes } from '@angular/router';


const routes: Routes = [
  { path: 'list', component: CoinListComponent },
  {
    path: 'detail/:id',
    component: CoinDetailComponent,
    resolve: { coin: CoinResolver },
  },
];

@NgModule({
  declarations: [
    NavbarComponent,
    CoinDetailComponent,
    CoinListComponent],
  imports: [
    CommonModule
  ],
  exports: [
     NavbarComponent
  ]
})
export class CoinModule { }
