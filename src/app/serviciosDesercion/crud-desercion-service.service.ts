import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Desercion } from './Desercion';

@Injectable({
  providedIn: 'root'
})
export class CrudDesercionServiceService {
//'http://localhost/MVCAprendiz/data/desercion.php'
  API : string  = //"http://localhost/xampp/MVCAprendiz/data/desercion.php"
  'http://localhost/MVCAprendiz/data/desercion.php'
  constructor(private clienteHttp : HttpClient) {}

    agregarDesercion(datosDesercion : Desercion) : Observable <any>
    {
        return this.clienteHttp.post(this.API + "?insertar=1" , datosDesercion);
    }

    obtenerDeserciones ()
    {
      return this.clienteHttp.get(this.API);
    }

    borrarDesercion (id : any) : Observable <any>
    {
        return this.clienteHttp.get(this.API + "?borrar=" + id);
    }
   
    obtenerDesercion (id : any) : Observable <any>
    {
        return this.clienteHttp.get(this.API + "?consultar=" + id);
    }

    editarDesercion (id : any, datosDesercion : Desercion) : Observable <any>
    {
        return this.clienteHttp.post(this.API + "?actualizar=" + id , datosDesercion);
    }
    
    
    
}
