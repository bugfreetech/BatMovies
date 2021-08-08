import { TestBed } from '@angular/core/testing';

import { BatarangService } from './batarang.service';

describe('BatarangService', () => {
  let service: BatarangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatarangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
