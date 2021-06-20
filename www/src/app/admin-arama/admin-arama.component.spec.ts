import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAramaComponent } from './admin-arama.component';

describe('AdminAramaComponent', () => {
  let component: AdminAramaComponent;
  let fixture: ComponentFixture<AdminAramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
