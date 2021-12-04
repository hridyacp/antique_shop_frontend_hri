import { TestBed } from '@angular/core/testing';

import { AntiqueService } from './antique.service';

describe('AntiqueService', () => {
  let service: AntiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
