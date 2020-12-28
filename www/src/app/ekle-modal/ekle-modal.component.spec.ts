import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkleModalComponent } from './ekle-modal.component';

describe('EkleModalComponent', () => {
  let component: EkleModalComponent;
  let fixture: ComponentFixture<EkleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkleModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
