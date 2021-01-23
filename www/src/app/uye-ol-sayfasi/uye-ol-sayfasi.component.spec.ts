import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UyeOlSayfasiComponent } from './uye-ol-sayfasi.component';

describe('UyeOlSayfasiComponent', () => {
  let component: UyeOlSayfasiComponent;
  let fixture: ComponentFixture<UyeOlSayfasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UyeOlSayfasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UyeOlSayfasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
