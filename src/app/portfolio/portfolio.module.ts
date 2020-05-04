import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPortfoliosComponent } from './all-portfolios/all-portfolios.component';
import { PortcoinsListComponent } from './portcoins-list/portcoins-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AllPortfoliosComponent, PortcoinsListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AllPortfoliosComponent
  ]
})
export class PortfolioModule { }
