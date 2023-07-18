import { TestBed } from '@angular/core/testing';

import { CrudProgramaServiceService } from './crud-programa-service.service';

describe('CrudAprendizServiceService', () => {
  let service: CrudProgramaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudProgramaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
