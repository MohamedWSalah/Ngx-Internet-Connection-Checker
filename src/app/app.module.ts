import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgInternetConnectionCheckerModule } from 'ngx-internet-connection-checker';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgInternetConnectionCheckerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
