import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin.model';
import { CoinDataService } from '../coin-data.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
  private _fetchCoins$: Observable<Coin[]>= this._data.coins$;
  public nieuw:boolean;
  public coinAdd: FormGroup;
  public message:string;

  constructor( private _data: CoinDataService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.coinAdd = this.fb.group({
      cName: ['', [Validators.required, Validators.minLength(3)]],
      cSymbol: ['', [Validators.required,Validators.minLength(3)]],
      cPrice: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      cProcent: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      cDescription: ['', [Validators.required,Validators.minLength(25)]],
      cLogo: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  get coins$(): Observable<Coin[]> {
    return this._fetchCoins$;
  }

  newClicked():void{
    this.nieuw=true;
  }

  closeClicked():void{
    this.nieuw=false;
  }

  onSubmit():void{
    console.log("coinadder werkt");
    this._data.addNewCoin(new Coin(this.coinAdd.value.cName,
      this.coinAdd.value.cSymbol,
      this.coinAdd.value.cLogo,
      this.coinAdd.value.cPrice,
      this.coinAdd.value.cProcent,
      this.coinAdd.value.cDescription)) .subscribe((c: Coin) => {
        this.message = `Your own personal coin was succesfully added`;
      });
    this.nieuw=false;
  }

  getErrorMessage(errors: any) {
    if (!errors) {
      return null;
    }
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs at least ${errors.minlength.requiredLength} characters (got ${errors.minlength.actualLength})`;
    }else if(errors.pattern){
      return `has to be a number`;
    }
  }


}
