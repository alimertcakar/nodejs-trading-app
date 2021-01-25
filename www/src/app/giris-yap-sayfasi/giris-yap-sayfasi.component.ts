import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-giris-yap-sayfasi',
  templateUrl: './giris-yap-sayfasi.component.html',
  styleUrls: ['./giris-yap-sayfasi.component.scss'],
})
export class GirisYapSayfasiComponent implements OnInit {
  constructor(authService: AuthService) {
    this.auth = authService;
  }

  ngOnInit(): void {}
  login(loginregisterform: any) {
    const { username, password } = loginregisterform.form.value;
    this.auth
      .login(username, password)
      .toPromise()
      .then((res: any) => {
        console.log('giris denemesi');
        this.auth.isLoggedIn();
      })
      .catch(() => {
        console.log('giriş denemesi');
        this.auth.isLoggedIn();
      });
  }
}
