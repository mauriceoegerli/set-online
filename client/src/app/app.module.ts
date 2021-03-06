import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './shared/card/card.component';
import { PracticeComponent } from './game/practice/practice.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, CardComponent, PracticeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule ,ToastrModule.forRoot(), ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
