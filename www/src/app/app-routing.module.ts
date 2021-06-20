import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { IlanSayfasiComponent } from './ilan-sayfasi/ilan-sayfasi.component';
import { IlanEklemeSayfasiComponent } from './ilan-ekleme-sayfasi/ilan-ekleme-sayfasi.component';
import { GirisYapSayfasiComponent } from './giris-yap-sayfasi/giris-yap-sayfasi.component';
import { UyeOlSayfasiComponent } from './uye-ol-sayfasi/uye-ol-sayfasi.component';
import { ProfilSayfasiComponent } from './profil-sayfasi/profil-sayfasi.component';
import { AramaSayfasiComponent } from './arama-sayfasi/arama-sayfasi.component';
import { KategoriSayfasiComponent } from './kategori-sayfasi/kategori-sayfasi.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent, pathMatch: 'full' },
  { path: 'ilan/:id', component: IlanSayfasiComponent },
  { path: 'ilan-ekle', component: IlanEklemeSayfasiComponent },
  { path: 'profil/:id', component: ProfilSayfasiComponent },
  { path: 'giris', component: GirisYapSayfasiComponent },
  { path: 'kayit', component: UyeOlSayfasiComponent },
  { path: 'ara/:term', component: AramaSayfasiComponent },
  { path: 'kategori/:term', component: KategoriSayfasiComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
