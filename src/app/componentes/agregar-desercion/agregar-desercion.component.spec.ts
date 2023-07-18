import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDesercionComponent } from './agregar-desercion.component';

describe('AgregarDesercionComponent', () => {
  let component: AgregarDesercionComponent;
  let fixture: ComponentFixture<AgregarDesercionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarDesercionComponent]
    });
    fixture = TestBed.createComponent(AgregarDesercionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
