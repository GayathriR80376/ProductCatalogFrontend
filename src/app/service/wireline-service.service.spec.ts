import { TestBed } from '@angular/core/testing';

import { WirelineServiceService } from './wireline-service.service';

describe('WirelineServiceService', () => {
  let service: WirelineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WirelineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
