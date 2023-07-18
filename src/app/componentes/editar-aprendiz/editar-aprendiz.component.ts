import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router ,ActivatedRoute } from '@angular/router';
import { CrudAprendizServiceService } from 'src/app/servicios/crud-aprendiz-service.service';


@Component({
  selector: 'app-editar-aprendiz',
  templateUrl: './editar-aprendiz.component.html',
  styleUrls: ['./editar-aprendiz.component.scss']
})

export class EditarAprendizComponent implements OnInit
{
  
  id : any;
  formularioDeAprendices:FormGroup;

  constructor(private activateRoute: ActivatedRoute, public formulario: FormBuilder, public crudService: CrudAprendizServiceService, public routeador: Router) {

    this.id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    this.formularioDeAprendices = this.formulario.group({
      id: [this.id],
      nombre: [''],
      correo: ['']
    });


    this.crudService.obtenerAprendiz(this.id).subscribe
      (respuesta => {
        console.log(respuesta);

        this.formularioDeAprendices.setValue({
          id: [this.id],
          nombre: respuesta[0]['nombre'],
          correo: respuesta[0]['correo']
        });
      }

      );
  }

  ngOnInit(): void 
  {

  }

  enviarDatos(): any {
    console.log("Click en Editar");
    console.log(this.formularioDeAprendices.value);

    this.crudService.editarAprendiz( this.id , this.formularioDeAprendices.value).subscribe(() => {

       this.routeador.navigateByUrl('/listar-aprendiz');
    });
     
    
  }

}
