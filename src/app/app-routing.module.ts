import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './user/auth.guards';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoinListComponent } from './coin/coin-list/coin-list.component';


const routes = [
  { path: 'coins/list', component: CoinListComponent },
  //{ path: '', redirectTo: 'coin/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
