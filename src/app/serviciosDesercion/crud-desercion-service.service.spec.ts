import { TestBed } from '@angular/core/testing';

import { CrudDesercionServiceService } from './crud-desercion-service.service';

describe('CrudDesercionServiceService', () => {
  let service: CrudDesercionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudDesercionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
