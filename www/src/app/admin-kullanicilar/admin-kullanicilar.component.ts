import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-kullanicilar',
  templateUrl: './admin-kullanicilar.component.html',
  styleUrls: ['./admin-kullanicilar.component.scss'],
})
export class AdminKullanicilarComponent implements OnInit {
  admin: any;
  constructor(adminService: AdminService) {
    this.admin = adminService;
  }

  kullaniciGuncelle(newKullanici: any) {
    this.admin.kullaniciGuncelle(newKullanici);
  }

  ngOnInit(): void {}
}
