import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPortfoliosComponent } from './all-portfolios/all-portfolios.component';
import { PortcoinsListComponent } from './portcoins-list/portcoins-list.component';



@NgModule({
  declarations: [AllPortfoliosComponent, PortcoinsListComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AllPortfoliosComponent
  ]
})
export class PortfolioModule { }
