import { Component, OnInit, Output } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';
import { Portfolio } from '../portfolio.model';
import { Observable, EMPTY } from 'rxjs';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-all-portfolios',
  templateUrl: './all-portfolios.component.html',
  styleUrls: ['./all-portfolios.component.scss']
})
export class AllPortfoliosComponent implements OnInit {
  private _fetchPortfolios$: Observable<Portfolio[]>= this._data.portfolios$;
  niewPortfolioMaken: boolean;
  public newPortfolio: FormGroup;
  public errorMessage: string = '';
  confirmationMessage: string;
  gekozenPortfolio: Portfolio ;
  naam: string="";

  constructor(private _data: PortfolioDataService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newPortfolio = this.fb.group({
      name: ['', Validators.required]})
  }


  get portfolios$(): Observable<Portfolio[]> {
      return this._fetchPortfolios$;
  }

  nieuwPortfolioClicked(): void{
    this.niewPortfolioMaken=true;
  }

  closeClicked():void{
    this.niewPortfolioMaken=false;
  }

  bepPortfolioClicked(portfolio: Portfolio){
    this.gekozenPortfolio=portfolio;
    this.naam=portfolio.name;
    console.log(portfolio.name);
  }

  deleteClicked(portfolio: Portfolio):void{
    this._data.deletePortfolio(portfolio);
    window.location.reload();
  }


  onSubmit() {
    this._data
    .addNewPortfolio(new Portfolio(this.newPortfolio.value.name))
    .pipe(
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    )
    .subscribe((p: Portfolio) => {
      this.confirmationMessage = `a portfolio for ${p.name} was successfully added`;
    });
    window.location.reload();

  this.newPortfolio = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]]
  });
  }
}
