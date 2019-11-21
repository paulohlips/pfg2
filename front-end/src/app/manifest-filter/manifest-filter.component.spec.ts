import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestFilterComponent } from './manifest-filter.component';

describe('ManifestFilterComponent', () => {
  let component: ManifestFilterComponent;
  let fixture: ComponentFixture<ManifestFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifestFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
