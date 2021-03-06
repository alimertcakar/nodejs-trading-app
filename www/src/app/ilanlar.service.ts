import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  constructor(private http: HttpClient) {}
  getListings() {
    return this.http.get<any>('/api/ilan/');
  }
  getListing(id: string) {
    return this.http.get<any>('/api/ilan/' + id);
  }
  getUserListings(id: string) {
    return this.http.get<any>(`/api/profil/${id}/ilanlari`);
  }
  getUser(id: string) {
    return this.http.get<any>(`/api/profil/${id}`, {
      responseType: 'text' as 'json',
    });
  }
}
