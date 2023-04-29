import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxInternetConnectionCheckerModule } from 'projects/ngx-internet-connection-checker/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxInternetConnectionCheckerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
