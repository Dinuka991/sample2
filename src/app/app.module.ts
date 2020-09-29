import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PocModule } from './project/poc/poc.module';
import { PocService } from './project/poc.service';

@NgModule({
  declarations: [
    AppComponent
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PocModule
  ],
  providers: [PocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
