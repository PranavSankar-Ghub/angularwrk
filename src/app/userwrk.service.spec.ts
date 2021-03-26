import { TestBed } from '@angular/core/testing';

import { UserwrkService } from './userwrk.service';

describe('UserwrkService', () => {
  let service: UserwrkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserwrkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
