import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
})
export class LoginRegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  login(loginregisterform: any) {
    const { username, password } = loginregisterform.form.value;

    axios.post('/hesap/olustur', {
      username: username,
      password: password,
    });
  }
  register(loginregisterform: any) {
    const { username, password } = loginregisterform.form.value;

    axios.post('/hesap/giris', {
      username: username,
      password: password,
    });
  }
}
