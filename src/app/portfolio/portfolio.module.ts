import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPortfoliosComponent } from './all-portfolios/all-portfolios.component';
import { PortcoinsListComponent } from './portcoins-list/portcoins-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditComponent } from './add-edit/add-edit.component';
import { MaterialModule } from '..//material/material.module';



@NgModule({
  declarations: [AllPortfoliosComponent, PortcoinsListComponent, AddEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    AllPortfoliosComponent, PortcoinsListComponent
  ]
})
export class PortfolioModule { }
