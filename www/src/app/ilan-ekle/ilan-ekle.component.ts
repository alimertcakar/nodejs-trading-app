import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ilan-ekle',
  templateUrl: './ilan-ekle.component.html',
  styleUrls: ['./ilan-ekle.component.scss'],
  host: {
    '(click)': 'onClick($event)',
  },
})
export class IlanEkleComponent implements OnInit {
  constructor() {}
  showVar: boolean = true;

  ngOnInit(): void {}

  onClick() {
    //this.toggleChild();
  }

  toggleChild() {
    this.showVar = !this.showVar;
  }
}
