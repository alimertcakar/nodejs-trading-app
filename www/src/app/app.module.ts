import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//http req için
import { HttpClientModule } from '@angular/common/http';
import { IlanEkleComponent } from './ilan-ekle/ilan-ekle.component';
import { EkleModalComponent } from './ekle-modal/ekle-modal.component';

@NgModule({
  declarations: [AppComponent, IlanEkleComponent, EkleModalComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
