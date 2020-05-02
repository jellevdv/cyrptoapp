import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoinModule} from '../app/coin/coin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    CoinModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
