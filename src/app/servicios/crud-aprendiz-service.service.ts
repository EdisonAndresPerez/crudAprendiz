import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aprendiz } from './Aprendiz';

@Injectable({
  providedIn: 'root'
})
export class CrudAprendizServiceService {
//'http://localhost/MVCAprendiz/data/aprendiz.php'
  API : string  = //"http://localhost/xampp/MVCAprendiz/data/aprendiz.php"
  'http://localhost/MVCAprendiz/data/aprendiz.php'
  
  constructor(private clienteHttp : HttpClient) {}

    agregarAprendiz(datosAprendiz : Aprendiz) : Observable <any>
    {
        return this.clienteHttp.post(this.API + "?insertar=1" , datosAprendiz);
    }

    obtenerAprendices ()
    {
      return this.clienteHttp.get(this.API);
    }

    borrarAprendiz (id : any) : Observable <any>
    {
        return this.clienteHttp.get(this.API + "?borrar=" + id);
    }
   
    obtenerAprendiz(id : any) : Observable <any>
    {
        return this.clienteHttp.get(this.API + "?consultar=" + id);
    }

    editarAprendiz(id : any, datosAprendiz : Aprendiz) : Observable <any>
    {
        return this.clienteHttp.post(this.API + "?actualizar=" + id , datosAprendiz);
    }
    
    
    
}
