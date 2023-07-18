import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Programa } from './Programa';

@Injectable({
  providedIn: 'root'
})
export class CrudProgramaServiceService {
  API: string = //"http://localhost/xampp/MVCAprendiz/data/programa.php"
  'http://localhost/MVCAprendiz/data/programa.php'

  constructor(private clienteHttp: HttpClient) {}

  agregarPrograma(datosPrograma: Programa): Observable<any> {
    return this.clienteHttp.post(this.API + "?insertar=1", datosPrograma);
  }

  obtenerProgramas(): Observable<any> {
    return this.clienteHttp.get<any[]>(this.API).pipe(
      map(programas => programas.filter(programa => programa.estado !== 'INA'))
    );
  }

  borrarPrograma(id: any): Observable<any> {
    return this.clienteHttp.get(this.API + "?borrar=" + id);
  }

  obtenerPrograma(id: any): Observable<any> {
    return this.clienteHttp.get(this.API + "?consultar=" + id);
  }

  editarPrograma(id: any, datosPrograma: Programa): Observable<any> {
    return this.clienteHttp.post(this.API + "?actualizar=" + id, datosPrograma);
  }
}
