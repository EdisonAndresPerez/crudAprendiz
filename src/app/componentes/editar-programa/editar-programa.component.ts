import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router ,ActivatedRoute } from '@angular/router';
import { CrudProgramaServiceService } from 'src/app/servicios Programa/crud-programa-service.service';


@Component({
  selector: 'app-editar-programa',
  templateUrl: './editar-programa.component.html',
  styleUrls: ['./editar-programa.component.scss']
})

export class EditarProgramaComponent implements OnInit
{
  
  id : any;
  formularioDeProgramas:FormGroup;

  constructor(private activateRoute: ActivatedRoute, public formulario: FormBuilder, public crudService: CrudProgramaServiceService, public routeador: Router) {

    this.id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    this.formularioDeProgramas = this.formulario.group({
      id: [this.id],
      descripcion: [''],
      sigla: ['']
    });


    this.crudService.obtenerPrograma(this.id).subscribe
      (respuesta => {
        console.log(respuesta);

        this.formularioDeProgramas.setValue({
          id: [this.id],
          descripcion: respuesta[0]['descripcion'],
          sigla: respuesta[0]['sigla']
        });
      }

      );
  }

  ngOnInit(): void 
  {

  }

  enviarDatos(): any {
    console.log("Click en Editar");
    console.log(this.formularioDeProgramas.value);

    this.crudService.editarPrograma( this.id , this.formularioDeProgramas.value).subscribe(() => {

       this.routeador.navigateByUrl('/listar-programa');
    });
     
    
  }

}

