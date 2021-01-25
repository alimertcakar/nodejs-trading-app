import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    try {
      const UserData = { username, password };
      return this.http.post<any>('/api/hesap/giris', UserData);
    } catch {
      return 'Some error maybe happened.';
    }
  }

  register(username: string, password: string) {
    const UserData = { username, password };
    this.http.post<any>('/api/hesap/olustur', UserData);
    this.router.navigateByUrl('/');
  }

  isLoggedIn() {
    try {
      this.http
        .get<any>('/api/gizli')
        .toPromise()
        .then((res) => {
          alert(res.error.text);
          if (
            res.error.text === 'Giriş Başarılı! Anasayfadan devam edebilirsin.'
          ) {
            this.router.navigateByUrl('/');
          }
        })
        .catch((res) => {
          alert(res.error.text);
          if (
            res.error.text === 'Giriş Başarılı! Anasayfadan devam edebilirsin.'
          ) {
            this.router.navigateByUrl('/');
          }
        });
      return 'giriş check';
    } catch {
      return 'error login check';
    }
  }
}
