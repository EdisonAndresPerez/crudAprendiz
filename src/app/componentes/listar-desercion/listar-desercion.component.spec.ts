import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDesercionComponent } from './listar-desercion.component';

describe('ListarDesercionComponent', () => {
  let component: ListarDesercionComponent;
  let fixture: ComponentFixture<ListarDesercionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDesercionComponent]
    });
    fixture = TestBed.createComponent(ListarDesercionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
