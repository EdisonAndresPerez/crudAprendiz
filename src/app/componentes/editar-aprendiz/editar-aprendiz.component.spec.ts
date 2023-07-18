import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAprendizComponent } from './editar-aprendiz.component';

describe('EditarAprendizComponent', () => {
  let component: EditarAprendizComponent;
  let fixture: ComponentFixture<EditarAprendizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAprendizComponent]
    });
    fixture = TestBed.createComponent(EditarAprendizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
