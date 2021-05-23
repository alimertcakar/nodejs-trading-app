import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AramaSayfasiComponent } from './arama-sayfasi.component';

describe('AramaSayfasiComponent', () => {
  let component: AramaSayfasiComponent;
  let fixture: ComponentFixture<AramaSayfasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AramaSayfasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AramaSayfasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
