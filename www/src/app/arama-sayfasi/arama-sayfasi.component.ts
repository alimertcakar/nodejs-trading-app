import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AramaService } from '../arama.service';

@Component({
  selector: 'app-arama-sayfasi',
  templateUrl: './arama-sayfasi.component.html',
  styleUrls: ['./arama-sayfasi.component.scss'],
})
export class AramaSayfasiComponent implements OnInit {
  term: string | null = '';
  arama: any;
  aramaSonuclari: any;

  constructor(public route: ActivatedRoute, aramaService: AramaService) {
    this.term = this.route.snapshot.paramMap.get('term');
    this.arama = aramaService;
    this.fetchAramaSonuclari();
  }

  fetchAramaSonuclari() {
    this.arama
      .ara(this.term)
      .toPromise()
      .then((res: any) => {
        console.log(res, 'arama sonuclari');
        this.aramaSonuclari = res;
      })
      .catch(() => {
        console.log('network ya da server hatası @ arama');
      });
  }

  ngOnInit(): void {}
}
