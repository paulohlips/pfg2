import { TestBed } from '@angular/core/testing';

import { ScraperContentService } from './scraper-content.service';

describe('ScraperContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScraperContentService = TestBed.get(ScraperContentService);
    expect(service).toBeTruthy();
  });
});
