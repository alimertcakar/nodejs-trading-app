import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnalizComponent } from './admin-analiz.component';

describe('AdminAnalizComponent', () => {
  let component: AdminAnalizComponent;
  let fixture: ComponentFixture<AdminAnalizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAnalizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAnalizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
