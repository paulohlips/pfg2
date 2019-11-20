import { TestBed } from '@angular/core/testing';

import { AnalyzerContentService } from './analyzer-content.service';

describe('AnalyzerContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalyzerContentService = TestBed.get(AnalyzerContentService);
    expect(service).toBeTruthy();
  });
});
