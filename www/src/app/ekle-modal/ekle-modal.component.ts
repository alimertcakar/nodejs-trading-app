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

  submit(ilanform: any) {
    const {
      title,
      stock,
      price,
      publisherId,
      description,
    } = ilanform.form.value;

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
