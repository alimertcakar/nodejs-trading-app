import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlanEkleComponent } from './ilan-ekle.component';

describe('IlanEkleComponent', () => {
  let component: IlanEkleComponent;
  let fixture: ComponentFixture<IlanEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlanEkleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IlanEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
