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
    } catch (e) {
      console.log(e);
      // return 'Some error maybe happened.';
      return this.http.post<any>('/api/hesap/giris', {});
    }
  }

  register(username: string, password: string) {
    try {
      const UserData = { username, password };
      (async () => {
        const rawResponse = await fetch('/api/hesap/olustur', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(UserData),
        });
        const content = await rawResponse.json();

        console.log(content);
        this.router.navigateByUrl('/');
      })();

      // return this.http.post<any>('/api/hesap/olustur', UserData);
      return 'neyi başaramadın';
    } catch (e) {
      console.log(e);
      return this.http.post<any>('/api/hesap/giris', {});
    }
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
