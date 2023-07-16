import { TestBed } from '@angular/core/testing';

import { SnutritionService } from './snutrition.service';

describe('SnutritionService', () => {
  let service: SnutritionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnutritionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
