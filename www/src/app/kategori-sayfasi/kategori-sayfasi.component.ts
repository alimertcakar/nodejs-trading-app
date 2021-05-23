import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KategoriService as KategoriService } from '../kategori.service';

@Component({
  selector: 'app-kategori-sayfasi',
  templateUrl: './kategori-sayfasi.component.html',
  styleUrls: ['./kategori-sayfasi.component.scss'],
})
export class KategoriSayfasiComponent implements OnInit {
  term: string | null = '';
  arama: any;
  listings: any;

  constructor(public route: ActivatedRoute, kategoriService: KategoriService) {
    this.term = this.route.snapshot.paramMap.get('term');
    this.arama = kategoriService;
    this.fetchAramaSonuclari();
  }

  fetchAramaSonuclari() {
    this.arama
      .ara(this.term)
      .toPromise()
      .then((res: any) => {
        console.log(res, 'arama sonuclari');
        this.listings = res;
      })
      .catch(() => {
        console.log('network ya da server hatası @ kategori');
      });
  }

  ngOnInit(): void {}
}
