import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router ,ActivatedRoute } from '@angular/router';
import { CrudDesercionServiceService } from 'src/app/serviciosDesercion/crud-desercion-service.service';

@Component({
  selector: 'app-editar-desercion',
  templateUrl: './editar-desercion.component.html',
  styleUrls: ['./editar-desercion.component.scss']
})

export class EditarDesercionComponent implements OnInit
{
  
  id : any;
  formularioDeDeserciones:FormGroup;

  constructor(private activateRoute: ActivatedRoute, public formulario: FormBuilder, public crudService: CrudDesercionServiceService, public routeador: Router) {

    this.id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    this.formularioDeDeserciones = this.formulario.group({
      id: [this.id],
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


    this.crudService.obtenerDesercion(this.id).subscribe
      (respuesta => {
        console.log(respuesta);

        this.formularioDeDeserciones.setValue({
          id: [this.id],
          nombre: respuesta[0]['nombre'],
          apellidos: respuesta[0]['apellidos'],
          tipoDocumento: respuesta[0]['tipoDocumento'],
          centro: respuesta[0]['centro'],
          codigoCentro: respuesta[0]['nombre'],
          programa: respuesta[0]['programa'],
          numeroFicha: respuesta[0]['numeroFicha'],
          instructor: respuesta[0]['instructor'],
          fechaInicioPrograma: respuesta[0]['fechaInicioPrograma'],
          jornada: respuesta[0]['jornada'],
          fechaRetiroPrograma: respuesta[0]['fechaRetiroPrograma'],
          causaRetiro: respuesta[0]['causaRetiro'],
          descripcionCausa: respuesta[0]['descripcionCausa'],
          observacion: respuesta[0]['observacion'],
        });
      }

      );
  }

  ngOnInit(): void 
  {

  }

  enviarDatos(): any {
    console.log("Click en Editar");
    console.log(this.formularioDeDeserciones.value);

    this.crudService.editarDesercion( this.id , this.formularioDeDeserciones.value).subscribe(() => {

       this.routeador.navigateByUrl('/listar-desercion');
    });
     
    
  }

}

