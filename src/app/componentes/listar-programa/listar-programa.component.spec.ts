import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProgramaComponent } from './listar-programa.component';

describe('ListarProgramaComponent', () => {
  let component: ListarProgramaComponent;
  let fixture: ComponentFixture<ListarProgramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarProgramaComponent]
    });
    fixture = TestBed.createComponent(ListarProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
