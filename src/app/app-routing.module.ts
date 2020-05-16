import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './user/auth.guards';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoinListComponent } from './coin/coin-list/coin-list.component';
import { CoinDetailComponent } from './coin/coin-detail/coin-detail.component';
import { CoinResolver } from './coin/CoinResolver';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AllPortfoliosComponent } from './portfolio/all-portfolios/all-portfolios.component';
import { ArticlesComponent } from './news/articles/articles.component';




const routes: Routes = [
  {
    path: 'coin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./coin/coin.module').then((mod) => mod.CoinModule),
    data: { preload: false },
  },
  {path: '', component:CoinListComponent, pathMatch:'full' },
  { path: 'coins/list',component: CoinListComponent },
  {path: 'coins/:id', component: CoinDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'portfolios', component: AllPortfoliosComponent},
  {path:'news',component:ArticlesComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
