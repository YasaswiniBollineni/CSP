import { TestBed } from '@angular/core/testing';

import { AnganwadiService } from './anganwadi.service';

describe('AnganwadiService', () => {
  let service: AnganwadiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnganwadiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
