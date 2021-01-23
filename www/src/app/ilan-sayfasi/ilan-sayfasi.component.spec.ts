import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlanSayfasiComponent } from './ilan-sayfasi.component';

describe('IlanSayfasiComponent', () => {
  let component: IlanSayfasiComponent;
  let fixture: ComponentFixture<IlanSayfasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlanSayfasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IlanSayfasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
