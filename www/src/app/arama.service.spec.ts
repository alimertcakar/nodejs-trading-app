import { TestBed } from '@angular/core/testing';

import { AramaService } from './arama.service';

describe('AramaService', () => {
  let service: AramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
