import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKullanicilarComponent } from './admin-kullanicilar.component';

describe('AdminKullanicilarComponent', () => {
  let component: AdminKullanicilarComponent;
  let fixture: ComponentFixture<AdminKullanicilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminKullanicilarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKullanicilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
