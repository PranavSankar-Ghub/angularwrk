import { TestBed } from '@angular/core/testing';

import { AuthguardnewService } from './authguardnew.service';

describe('AuthguardnewService', () => {
  let service: AuthguardnewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguardnewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
