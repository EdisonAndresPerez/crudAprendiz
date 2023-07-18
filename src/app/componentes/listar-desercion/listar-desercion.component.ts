import { Component, OnInit } from '@angular/core';
import { CrudDesercionServiceService } from 'src/app/serviciosDesercion/crud-desercion-service.service';

@Component({
  selector: 'app-listar-desercion',
  templateUrl: './listar-desercion.component.html',
  styleUrls: ['./listar-desercion.component.scss']
})
export class ListarDesercionComponent implements OnInit{

  deserciones :any;
  constructor(private crudService : CrudDesercionServiceService){}

  ngOnInit(): void {
    this.crudService.obtenerDeserciones().subscribe( respuesta => {
      this.deserciones = respuesta;
    });
  }

  borrarDesercion(id: any, iControl : any)
  {
    console.log( id , iControl);
    this.crudService.borrarDesercion(id).subscribe();
    this.deserciones.splice(iControl , 1 );
  }
  


}
