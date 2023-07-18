import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAprendizComponent } from './listar-aprendiz.component';

describe('ListarAprendizComponent', () => {
  let component: ListarAprendizComponent;
  let fixture: ComponentFixture<ListarAprendizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAprendizComponent]
    });
    fixture = TestBed.createComponent(ListarAprendizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
