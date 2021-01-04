import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  constructor() {}
  getListings() {
    return 'listing';
  }
}
