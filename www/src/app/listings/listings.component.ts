import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
})
export class ListingsComponent implements OnInit {
  listings: any = [];

  constructor(listingService: ListingsService) {
    this.listings = listingService.getListings();
  }

  ngOnInit(): void {}
}
