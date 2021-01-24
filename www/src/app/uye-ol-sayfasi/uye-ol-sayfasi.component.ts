import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uye-ol-sayfasi',
  templateUrl: './uye-ol-sayfasi.component.html',
  styleUrls: ['./uye-ol-sayfasi.component.scss'],
})
export class UyeOlSayfasiComponent implements OnInit {
  constructor(authService: AuthService, private router: Router) {
    this.auth = authService;
  }

  ngOnInit(): void {}
  register(loginregisterform: any) {
    const { username, password } = loginregisterform.form.value;

    this.auth.register(username, password);
    // .toPromise()
    // .then((res) => {
    //   console.log(res);
    // });
    //   axios.post('/hesap/olustur', {
    //     username: username,
    //     password: password,
    //   });
  }
}
