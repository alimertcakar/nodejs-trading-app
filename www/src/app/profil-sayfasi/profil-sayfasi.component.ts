import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { string } from 'joi';
import { ListingsService } from '../ilanlar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil-sayfasi',
  templateUrl: './profil-sayfasi.component.html',
  styleUrls: ['./profil-sayfasi.component.scss'],
})
export class ProfilSayfasiComponent implements OnInit {
  userListings: any = [
    { title: 'yükleniyor' },
    { title: 'yükleniyor' },
    { title: 'yükleniyor' },
    { title: 'yükleniyor' },
    { title: 'yükleniyor' },
  ];
  user: string = 'yükleniyor...';
  id: any = 'yükleniyor...';
  constructor(listingService: ListingsService, public route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');

    listingService.getUserListings(this.id).subscribe((data: any) => {
      this.userListings = data;
    });
    listingService.getUser(this.id).subscribe((data: any) => {
      this.user = data;
      console.log(data);
    });
  }
  ngOnInit(): void {}
}
