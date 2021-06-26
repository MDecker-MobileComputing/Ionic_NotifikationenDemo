import { TestBed } from '@angular/core/testing';

import { HelferleinService } from './helferlein.service';

describe('HelferleinService', () => {
  let service: HelferleinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelferleinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
