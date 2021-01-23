import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlanEklemeSayfasiComponent } from './ilan-ekleme-sayfasi.component';

describe('IlanEklemeSayfasiComponent', () => {
  let component: IlanEklemeSayfasiComponent;
  let fixture: ComponentFixture<IlanEklemeSayfasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlanEklemeSayfasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IlanEklemeSayfasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
