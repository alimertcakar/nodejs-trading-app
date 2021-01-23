import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-uye-ol-sayfasi',
  templateUrl: './uye-ol-sayfasi.component.html',
  styleUrls: ['./uye-ol-sayfasi.component.scss'],
})
export class UyeOlSayfasiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  register(loginregisterform: any) {
    const { username, password } = loginregisterform.form.value;

    axios.post('/hesap/giris', {
      username: username,
      password: password,
    });
  }
}
