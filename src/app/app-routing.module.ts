import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAprendizComponent } from './componentes/agregar-aprendiz/agregar-aprendiz.component';
import { ListarAprendizComponent } from './componentes/listar-aprendiz/listar-aprendiz.component';
import { EditarAprendizComponent } from './componentes/editar-aprendiz/editar-aprendiz.component';
import { AgregarProgramaComponent } from './componentes/agregar-programa/agregar-programa.component';
import { EditarProgramaComponent } from './componentes/editar-programa/editar-programa.component';
import { ListarProgramaComponent } from './componentes/listar-programa/listar-programa.component';
import { AgregarDesercionComponent } from './componentes/agregar-desercion/agregar-desercion.component';
import { EditarDesercionComponent } from './componentes/editar-desercion/editar-desercion.component';
import { ListarDesercionComponent } from './componentes/listar-desercion/listar-desercion.component';
import { VerDesercionComponent } from './componentes/ver-desercion/ver-desercion.component';


// Hace la pagina reactiva ___

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'agregar-aprendiz'},
  {path: 'agregar-aprendiz' , component: AgregarAprendizComponent},
  {path: 'editar-aprendiz/:id' , component: EditarAprendizComponent},
  {path: 'listar-aprendiz' , component: ListarAprendizComponent},
  {path: 'agregar-programa' , component: AgregarProgramaComponent},
  {path: 'editar-programa/:id' , component: EditarProgramaComponent},
  {path: 'listar-programa' , component: ListarProgramaComponent},
  {path: 'agregar-desercion' , component: AgregarDesercionComponent},
  {path: 'editar-desercion/:id' , component: EditarDesercionComponent},
  {path: 'listar-desercion' , component: ListarDesercionComponent},
  {path: 'ver-desercion/:id' , component: VerDesercionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
