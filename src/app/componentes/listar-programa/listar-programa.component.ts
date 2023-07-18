import { Component, OnInit } from '@angular/core';
import { CrudProgramaServiceService } from 'src/app/servicios Programa/crud-programa-service.service';

@Component({
  selector: 'app-listar-programa',
  templateUrl: './listar-programa.component.html',
  styleUrls: ['./listar-programa.component.scss']
})
export class ListarProgramaComponent implements OnInit {

  programas :any; 
  id : any;
  constructor(private crudService : CrudProgramaServiceService){}


  ngOnInit(): void {
    this.crudService.obtenerProgramas().subscribe( respuesta => {
      this.programas = respuesta;
    });
  }


  borrarPrograma(id: any, iControl : any)
  {
    console.log( id , iControl);
    this.crudService.borrarPrograma(id).subscribe();
    this.programas.splice(iControl , 1 );
  }


}

