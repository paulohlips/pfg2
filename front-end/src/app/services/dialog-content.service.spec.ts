import { TestBed } from '@angular/core/testing';

import { DialogContentService } from './dialog-content.service';

describe('DialogContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DialogContentService = TestBed.get(DialogContentService);
    expect(service).toBeTruthy();
  });
});
