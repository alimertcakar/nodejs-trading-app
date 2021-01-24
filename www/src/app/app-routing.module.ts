import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { IlanSayfasiComponent } from './ilan-sayfasi/ilan-sayfasi.component';
import { IlanEklemeSayfasiComponent } from './ilan-ekleme-sayfasi/ilan-ekleme-sayfasi.component';
import { GirisYapSayfasiComponent } from './giris-yap-sayfasi/giris-yap-sayfasi.component';
import { UyeOlSayfasiComponent } from './uye-ol-sayfasi/uye-ol-sayfasi.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent, pathMatch: 'full' },
  { path: 'ilan/:id', component: IlanSayfasiComponent },
  { path: 'ilan-ekle', component: IlanEklemeSayfasiComponent },
  { path: 'giris', component: GirisYapSayfasiComponent },
  { path: 'kayit', component: UyeOlSayfasiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
