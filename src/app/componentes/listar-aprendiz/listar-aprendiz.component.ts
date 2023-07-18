import { Component, OnInit } from '@angular/core';
import { CrudAprendizServiceService } from 'src/app/servicios/crud-aprendiz-service.service';

@Component({
  selector: 'app-listar-aprendiz',
  templateUrl: './listar-aprendiz.component.html',
  styleUrls: ['./listar-aprendiz.component.scss']
})
export class ListarAprendizComponent implements OnInit {

  aprendices :any;
  constructor(private crudService : CrudAprendizServiceService){}

  ngOnInit(): void {
    this.crudService.obtenerAprendices().subscribe( respuesta => {
      this.aprendices = respuesta;
    });
  }

  borrarAprendiz(id: any, iControl : any)
  {
    console.log( id , iControl);
    this.crudService.borrarAprendiz(id).subscribe();
    this.aprendices.splice(iControl , 1 );
  }


}
