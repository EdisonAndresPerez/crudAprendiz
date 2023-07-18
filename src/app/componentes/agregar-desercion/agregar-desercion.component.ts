import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
import { CrudDesercionServiceService } from 'src/app/serviciosDesercion/crud-desercion-service.service';


@Component({
  selector: 'app-agregar-desercion',
  templateUrl: './agregar-desercion.component.html',
  styleUrls: ['./agregar-desercion.component.scss']
})
export class AgregarDesercionComponent implements OnInit
{
  formularioDeDeserciones:FormGroup;
  
  constructor(public formulario: FormBuilder, public crudService : CrudDesercionServiceService, public routeador : Router)
  {
    this.formularioDeDeserciones = this.formulario.group({
      nombre: [''],
      apellidos: [''],
      tipoDocumento: [''],
      centro: [''],
      codigoCentro: [''],
      programa: [''],
      numeroFicha: [''],
      instructor: [''],
      fechaInicioPrograma: [''],
      jornada: [''],
      fechaRetiroPrograma: [''],
      causaRetiro: [''],
      descripcionCausa: [''],
      observacion: ['']
    });
  }

  ngOnInit(): void {
    
  }

  enviarDatos (): any{
    console.log("Click en agregar");
    console.log(this.formularioDeDeserciones.value);
    this.crudService.agregarDesercion(this.formularioDeDeserciones.value).subscribe();
    this.routeador.navigateByUrl('/listar-desercion');
    
  }
}
