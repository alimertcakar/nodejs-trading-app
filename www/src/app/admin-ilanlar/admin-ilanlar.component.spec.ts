import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIlanlarComponent } from './admin-ilanlar.component';

describe('AdminIlanlarComponent', () => {
  let component: AdminIlanlarComponent;
  let fixture: ComponentFixture<AdminIlanlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminIlanlarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIlanlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
