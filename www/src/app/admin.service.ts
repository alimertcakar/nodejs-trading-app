import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient, private router: Router) {}

  kullaniciGetir(term: string) {
    try {
      return this.http.post<any>('/api/kullanici-getir', { term });
    } catch (e) {
      console.log(e);
      // return 'Some error maybe happened.';
      return this.http.post<any>('/api/ara', {});
    }
  }
  kategoriGetir(term: string) {
    try {
      return this.http.post<any>('/api/kategori-getir', { term });
    } catch (e) {
      console.log(e);
      // return 'Some error maybe happened.';
      return this.http.post<any>('/api/ara', {});
    }
  }
  aramaGetir(term: string) {
    try {
      return this.http.post<any>('/api/ara-map-getir', { term });
    } catch (e) {
      console.log(e);
      // return 'Some error maybe happened.';
      return this.http.post<any>('/api/ara', {});
    }
  }
  ilanGetir(term: string) {
    try {
      return this.http.post<any>('/api/ilan-getir', { term });
    } catch (e) {
      console.log(e);
      // return 'Some error maybe happened.';
      return this.http.post<any>('/api/ara', {});
    }
  }
}
