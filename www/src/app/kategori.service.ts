import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class KategoriService {
  constructor(private http: HttpClient, private router: Router) {}

  ara(term: string) {
    try {
      return this.http.post<any>('/api/ilan/kategori', { term });
    } catch (e) {
      console.log(e);
      // return 'Some error maybe happened.';
      return this.http.post<any>('/api/ilan/kategori', {});
    }
  }
}
