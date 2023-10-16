import { TestBed } from '@angular/core/testing';

import { WlineserviceService } from './wlineservice.service';

describe('WlineserviceService', () => {
  let service: WlineserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WlineserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
