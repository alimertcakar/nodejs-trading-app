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
import { AdminComponent } from './admin/admin.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AdminKullanicilarComponent } from './admin-kullanicilar/admin-kullanicilar.component';
import { AdminIlanlarComponent } from './admin-ilanlar/admin-ilanlar.component';
import { AdminKategoriComponent } from './admin-kategori/admin-kategori.component';
import { AdminAramaComponent } from './admin-arama/admin-arama.component';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { AdminAnalizComponent } from './admin-analiz/admin-analiz.component';

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
    AdminComponent,
    AdminKullanicilarComponent,
    AdminIlanlarComponent,
    AdminKategoriComponent,
    AdminAramaComponent,
    AdminAnalizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
