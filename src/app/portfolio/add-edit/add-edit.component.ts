import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  addClickedB:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  addClicked():void{
    console.log("Add clicked");
    this.addClickedB=true;
  }

  refreshPage():void{
    window.location.reload();
  }

  submitClicked():void{
    console.log("submit");
  }

  cancelClicked():void{
    this.addClickedB=false;
  }

}
