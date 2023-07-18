import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { CrudAprendizServiceService } from 'src/app/servicios/crud-aprendiz-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-aprendiz',
  templateUrl: './agregar-aprendiz.component.html',
  styleUrls: ['./agregar-aprendiz.component.scss']
})
export class AgregarAprendizComponent implements OnInit {

  formularioDeAprendices:FormGroup;
  
  constructor(public formulario: FormBuilder, public crudService : CrudAprendizServiceService, public routeador : Router)
  {
    this.formularioDeAprendices = this.formulario.group({
      nombre: [''],
      correo: ['']
    });
  }

  ngOnInit(): void {
    
  }
  
  enviarDatos (): any{
    console.log("Click en agregar");
    console.log(this.formularioDeAprendices.value);
    this.crudService.agregarAprendiz(this.formularioDeAprendices.value).subscribe();
    this.routeador.navigateByUrl('/listar-aprendiz');
  }
}
