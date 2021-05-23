import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arama-sayfasi',
  templateUrl: './arama-sayfasi.component.html',
  styleUrls: ['./arama-sayfasi.component.scss'],
})
export class AramaSayfasiComponent implements OnInit {
  term: string = '';

  constructor(public route: ActivatedRoute) {
    this.term = this.route.snapshot.paramMap.get('term');
  }

  ngOnInit(): void {}
}
