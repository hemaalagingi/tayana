import { TestBed } from '@angular/core/testing';

import { ProductFeatureService } from './product-feature.service';

describe('ProductFeatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductFeatureService = TestBed.get(ProductFeatureService);
    expect(service).toBeTruthy();
  });
});
