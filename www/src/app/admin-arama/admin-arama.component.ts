import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { AramaService } from '../arama.service';

@Component({
  selector: 'app-admin-arama',
  templateUrl: './admin-arama.component.html',
  styleUrls: ['./admin-arama.component.scss'],
})
export class AdminAramaComponent implements OnInit {
  eslestirmeler = [{ terim: 'örnek: motorsiklet', eslestirme: 'motosiklet' }];
  public yeniEslestirme: any;
  arama: any;

  constructor(aramaService: AramaService) {
    this.arama = aramaService;
  }

  ngOnInit(): void {
    this.eslestirmeGetir();
  }

  eslestirmeGetir() {
    this.arama
      .eslestirmeGetir()
      .toPromise()
      .then((res: any) => {
        console.log(res, 'arama sonuclari');
        this.eslestirmeler = res;
      })
      .catch(() => {
        console.log('network ya da server hatası @ arama');
      });
  }

  eslestirmeEkle(eslestirmeform: any) {
    this.eslestirmeler.push(eslestirmeform.form.value);
    axios
      .post('/api/ara/eslestirme-ekle', eslestirmeform.form.value)
      .then((r) => {
        // this.router.navigateByUrl('/');
      })
      .catch((e) => console.log(e));
  }
}
