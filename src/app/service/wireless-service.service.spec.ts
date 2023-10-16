import { TestBed } from '@angular/core/testing';

import { WirelessServiceService } from './wireless-service.service';

describe('WirelessServiceService', () => {
  let service: WirelessServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WirelessServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
