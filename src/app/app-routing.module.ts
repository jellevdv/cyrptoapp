import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './user/auth.guards';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [{
    path: 'coin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./coin/coin.module').then((mod) => mod.CoinModule),
    data: { preload: true },
  },
  { path: '', redirectTo: 'coin/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
