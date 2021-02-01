import { TestBed } from '@angular/core/testing';

import { SpacexproserviceService } from './spacexproservice.service';

describe('SpacexproserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpacexproserviceService = TestBed.get(SpacexproserviceService);
    expect(service).toBeTruthy();
  });
});
