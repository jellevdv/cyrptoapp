import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinResolver } from './CoinResolver';
import { Routes } from '@angular/router';
import { CoinFilterPipe } from './coin-filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '..//material/material.module';


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
    CoinDetailComponent,
    CoinListComponent,
    CoinFilterPipe],
  imports: [
    CommonModule,ReactiveFormsModule,MaterialModule
  ],
  exports: [
     CoinListComponent,
     CoinDetailComponent
  ]
})
export class CoinModule { }
