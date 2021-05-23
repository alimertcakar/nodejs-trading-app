import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriSayfasiComponent } from './kategori-sayfasi.component';

describe('KategoriSayfasiComponent', () => {
  let component: KategoriSayfasiComponent;
  let fixture: ComponentFixture<KategoriSayfasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KategoriSayfasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriSayfasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
