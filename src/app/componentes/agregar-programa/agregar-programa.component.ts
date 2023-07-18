import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
import { CrudProgramaServiceService } from 'src/app/servicios Programa/crud-programa-service.service';

@Component({
  selector: 'app-agregar-programa',
  templateUrl: './agregar-programa.component.html',
  styleUrls: ['./agregar-programa.component.scss']
})
export class AgregarProgramaComponent implements OnInit
{
  formularioDeProgramas:FormGroup;
  
  constructor(public formulario: FormBuilder, public crudService : CrudProgramaServiceService, public routeador : Router)
  {
    this.formularioDeProgramas = this.formulario.group({
      descripcion: [''],
      sigla: ['']
    });
  }

  ngOnInit(): void {
    
  }

  enviarDatos (): any{
    console.log("Click en agregar");
    console.log(this.formularioDeProgramas.value);
    this.crudService.agregarPrograma(this.formularioDeProgramas.value).subscribe();
    this.routeador.navigateByUrl('/listar-programa');
  }



}
