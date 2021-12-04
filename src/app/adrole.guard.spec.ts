import { TestBed } from '@angular/core/testing';

import { AdroleGuard } from './adrole.guard';

describe('AdroleGuard', () => {
  let guard: AdroleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdroleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
