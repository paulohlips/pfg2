import { TestBed } from '@angular/core/testing';

import { ManifestFilterContentService } from './manifest-filter-content.service';

describe('ManifestFilterContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManifestFilterContentService = TestBed.get(ManifestFilterContentService);
    expect(service).toBeTruthy();
  });
});
