import { TestBed } from '@angular/core/testing';

import { CrudAprendizServiceService } from './crud-aprendiz-service.service';

describe('CrudAprendizServiceService', () => {
  let service: CrudAprendizServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudAprendizServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
