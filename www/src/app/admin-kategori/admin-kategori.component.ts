import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-kategori',
  templateUrl: './admin-kategori.component.html',
  styleUrls: ['./admin-kategori.component.scss'],
})
export class AdminKategoriComponent implements OnInit {
  admin: any;
  constructor(adminService: AdminService) {
    this.admin = adminService;
  }

  ngOnInit(): void {}

  kategoriGuncelle(term: string) {
    this.admin.kategoriGuncelle(term);
  }
}
