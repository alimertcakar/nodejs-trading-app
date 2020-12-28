import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nodetrading';
  listings: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('/api/ilan/').subscribe((data: any) => {
      this.listings.push(data);
      console.log(this.listings[0]);
    });
  }
}
