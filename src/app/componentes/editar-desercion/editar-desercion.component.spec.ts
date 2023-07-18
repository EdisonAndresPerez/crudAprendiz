import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDesercionComponent } from './editar-desercion.component';

describe('EditarDesercionComponent', () => {
  let component: EditarDesercionComponent;
  let fixture: ComponentFixture<EditarDesercionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDesercionComponent]
    });
    fixture = TestBed.createComponent(EditarDesercionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
