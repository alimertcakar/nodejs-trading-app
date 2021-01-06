import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../ilanlar.service';

@Component({
  selector: 'app-ilanlar',
  templateUrl: './ilanlar.component.html',
  styleUrls: ['./ilanlar.component.scss'],
})
export class ListingsComponent implements OnInit {
  listings: any = [];

  constructor(listingService: ListingsService) {
    listingService.getListings().subscribe((data: any) => {
      this.listings.push(data);
    });
  }

  ngOnInit() {}
}
