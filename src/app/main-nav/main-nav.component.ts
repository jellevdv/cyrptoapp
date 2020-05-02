import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationService } from '../user/authentication.service';
import { Router } from '@angular/router';
import { Coin } from '../coin/coin.model';
import { CoinDataService } from '../coin/coin-data.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  loggedInUser$ = this._authenticationService.user$;
  private _fetchCoins$: Observable<Coin[]>= this._data.coins$;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _authenticationService: AuthenticationService,
    private _router: Router,
    private _data: CoinDataService
  ) {}

  logout() {
    this._authenticationService.logout();
  }

  login() {
    this._router.navigate(['/login']);
  }

  get coins$(): Observable<Coin[]> {
    return this._fetchCoins$;
  }

  goToCoin(id:number){
    this._router.navigate(['/detail/id']);
  }


}
