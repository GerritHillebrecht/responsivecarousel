import { TestBed } from '@angular/core/testing';

import { ResponsivecarouselService } from './responsivecarousel.service';

describe('ResponsivecarouselService', () => {
  let service: ResponsivecarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsivecarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
