import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from '../ilanlar.service';

@Component({
  selector: 'app-ilan-sayfasi',
  templateUrl: './ilan-sayfasi.component.html',
  styleUrls: ['./ilan-sayfasi.component.scss'],
})
export class IlanSayfasiComponent implements OnInit {
  ilanId: any = '1';
  listing: any = {
    price: 'Yükleniyor...',
    stock: 'Yükleniyor...',
    description: 'Yükleniyor...',
    user_id: 'Yükleniyor...',
    ilanId: 'Yükleniyor...',
    username: 'Yükleniyor...',
    created_at_formatted: 'Yükleniyor...',
    title: 'Yükleniyor...',
    description: 'Yükleniyor...',
  };
  constructor(public route: ActivatedRoute, listingService: ListingsService) {
    this.ilanId = this.route.snapshot.paramMap.get('id');
    listingService.getListing(this.ilanId.toString()).subscribe((data: any) => {
      this.listing = data[0];
      console.log(this.listing);
    });
  }

  ngOnInit(): void {}
}
