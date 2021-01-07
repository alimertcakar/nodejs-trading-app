import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//http req için
import { HttpClientModule } from '@angular/common/http';
import { IlanEkleComponent } from './ilan-ekle/ilan-ekle.component';
import { EkleModalComponent } from './ekle-modal/ekle-modal.component';
import { ListingsComponent } from './ilanlar/ilanlar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

@NgModule({
  declarations: [
    AppComponent,
    IlanEkleComponent,
    EkleModalComponent,
    ListingsComponent,
    HeaderComponent,
    FooterComponent,
    LoginRegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}