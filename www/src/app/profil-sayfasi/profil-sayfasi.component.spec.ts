import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSayfasiComponent } from './profil-sayfasi.component';

describe('ProfilSayfasiComponent', () => {
  let component: ProfilSayfasiComponent;
  let fixture: ComponentFixture<ProfilSayfasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilSayfasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSayfasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
