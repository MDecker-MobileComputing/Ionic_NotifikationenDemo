import { TestBed } from '@angular/core/testing';

import { BenachrichtigungsService } from './benachrichtigungs.service';

describe('BenachrichtigungsService', () => {
  let service: BenachrichtigungsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenachrichtigungsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
