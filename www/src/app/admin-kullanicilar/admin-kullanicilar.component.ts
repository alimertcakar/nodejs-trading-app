import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AramaService } from '../arama.service';

@Component({
  selector: 'app-admin-kullanicilar',
  templateUrl: './admin-kullanicilar.component.html',
  styleUrls: ['./admin-kullanicilar.component.scss'],
})
export class AdminKullanicilarComponent implements OnInit {
  admin: any;
  arama: any;
  kullanicilar: any;
  constructor(adminService: AdminService, aramaService: AramaService) {
    this.admin = adminService;
    this.arama = aramaService;
  }

  ngOnInit(): void {
    this.kullaniciGetir();
  }

  kullaniciGetir() {
    this.arama
      .kullaniciGetir()
      .toPromise()
      .then((res: any) => {
        console.log(res, 'arama sonuclari');
        this.kullanicilar = res;
      })
      .catch(() => {
        console.log('network ya da server hatası @ arama');
      });
  }

  kullaniciGuncelle(newKullanici: any) {
    this.admin.kullaniciGuncelle(newKullanici);
  }
}
