import { TestBed } from '@angular/core/testing';

import { FoodFilterService } from './food-filter.service';

describe('FoodFilterService', () => {
  let service: FoodFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
