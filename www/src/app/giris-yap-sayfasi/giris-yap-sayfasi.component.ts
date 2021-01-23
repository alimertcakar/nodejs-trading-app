import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-giris-yap-sayfasi',
  templateUrl: './giris-yap-sayfasi.component.html',
  styleUrls: ['./giris-yap-sayfasi.component.scss'],
})
export class GirisYapSayfasiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  login(loginregisterform: any) {
    const { username, password } = loginregisterform.form.value;

    axios.post('/hesap/olustur', {
      username: username,
      password: password,
    });
  }
}
