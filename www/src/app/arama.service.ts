import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AramaService {
  constructor(private http: HttpClient, private router: Router) {}

  ara(term: string) {
    try {
      return this.http.post<any>('/api/ara', { term });
    } catch (e) {
      console.log(e);
      // return 'Some error maybe happened.';
      return this.http.post<any>('/api/ara', {});
    }
  }

  eslestirmeGetir(term: string) {
    try {
      return this.http.get<any>('/api/ara/eslestirme');
    } catch (e) {
      console.log(e);
      // return 'Some error maybe happened.';
      return this.http.get<any>('/api/ara/eslestirme', {});
    }
  }
}
