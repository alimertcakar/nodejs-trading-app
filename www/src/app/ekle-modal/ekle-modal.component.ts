import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-ekle-modal',
  templateUrl: './ekle-modal.component.html',
  styleUrls: ['./ekle-modal.component.scss'],
})
export class EkleModalComponent implements OnInit {
  @Input() showMePartially!: boolean;

  constructor() {}

  yollaKaderimYolla(): void {
    //acıları bana yolla
    let title = (<HTMLInputElement>document.getElementById('title')).value;
    let stock = (<HTMLInputElement>document.getElementById('stock')).value;
    let price = (<HTMLInputElement>document.getElementById('price')).value;
    let publisherId = (<HTMLInputElement>document.getElementById('publisherId'))
      .value;
    let description = (<HTMLInputElement>document.getElementById('description'))
      .value;

    axios.post('/api/ilan/olustur', {
      title: title,
      stock: stock,
      price: price,
      publisherId: publisherId,
      description: description,
    });
  }

  ngOnInit(): void {}
}
