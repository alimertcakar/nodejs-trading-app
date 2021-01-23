import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirisYapSayfasiComponent } from './giris-yap-sayfasi.component';

describe('GirisYapSayfasiComponent', () => {
  let component: GirisYapSayfasiComponent;
  let fixture: ComponentFixture<GirisYapSayfasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirisYapSayfasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GirisYapSayfasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
