import { TestBed } from '@angular/core/testing';

import { ServiciosDisercionService } from './servicios-disercion.service';

describe('ServiciosDisercionService', () => {
  let service: ServiciosDisercionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosDisercionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
