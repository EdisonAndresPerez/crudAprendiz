import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAprendizComponent } from './agregar-aprendiz.component';

describe('AgregarAprendizComponent', () => {
  let component: AgregarAprendizComponent;
  let fixture: ComponentFixture<AgregarAprendizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarAprendizComponent]
    });
    fixture = TestBed.createComponent(AgregarAprendizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
