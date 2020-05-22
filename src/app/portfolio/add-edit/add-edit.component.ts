import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoinDataService } from 'src/app/coin/coin-data.service';
import { PortCoin } from '../portfcoin.model';


@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  addClickedB:boolean;
  public coinAdd: FormGroup;

  constructor(private fb: FormBuilder, private _data: CoinDataService) { }

  ngOnInit(): void {
    this.coinAdd = this.fb.group({
      coinSymbol: ['', [Validators.required, Validators.minLength(3)]],
      amount: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
    });
  }

  addClicked():void{
    console.log("Add clicked");
    this.addClickedB=true;
  }

  refreshPage():void{
    window.location.reload();
  }

  onSubmit():void{
      console.log(this.coinAdd.value.amount);
  }

  submitClicked():void{
    console.log("form werkt");
    //methode coin toevoegen aan portfolio
  }

  cancelClicked():void{
    this.addClickedB=false;
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
