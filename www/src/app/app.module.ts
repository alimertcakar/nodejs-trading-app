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
import { IlanSayfasiComponent } from './ilan-sayfasi/ilan-sayfasi.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { IlanEklemeSayfasiComponent } from './ilan-ekleme-sayfasi/ilan-ekleme-sayfasi.component';
import { GirisYapSayfasiComponent } from './giris-yap-sayfasi/giris-yap-sayfasi.component';
import { UyeOlSayfasiComponent } from './uye-ol-sayfasi/uye-ol-sayfasi.component';
import { ProfilSayfasiComponent } from './profil-sayfasi/profil-sayfasi.component';
import { AramaSayfasiComponent } from './arama-sayfasi/arama-sayfasi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KategoriSayfasiComponent } from './kategori-sayfasi/kategori-sayfasi.component';

@NgModule({
  declarations: [
    AppComponent,
    IlanEkleComponent,
    EkleModalComponent,
    ListingsComponent,
    HeaderComponent,
    FooterComponent,
    IlanSayfasiComponent,
    HomeComponentComponent,
    IlanEklemeSayfasiComponent,
    GirisYapSayfasiComponent,
    UyeOlSayfasiComponent,
    ProfilSayfasiComponent,
    AramaSayfasiComponent,
    KategoriSayfasiComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
