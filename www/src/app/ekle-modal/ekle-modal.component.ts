import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ekle-modal',
  templateUrl: './ekle-modal.component.html',
  styleUrls: ['./ekle-modal.component.scss'],
})
export class EkleModalComponent implements OnInit {
  @Input() showMePartially!: boolean;

  constructor(private router: Router) {}

  submit(ilanform: any) {
    const {
      title,
      stock,
      price,
      publisherId,
      description,
    } = ilanform.form.value;

    axios
      .post('/api/ilan/olustur', {
        title: title,
        stock: stock,
        price: price,
        publisherId: getCookieValue('userid'),
        description: description,
      })
      .then((r) => {
        this.router.navigateByUrl('/');
      });
  }

  ngOnInit(): void {}
}

function getCookieValue(a: any) {
  var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}
