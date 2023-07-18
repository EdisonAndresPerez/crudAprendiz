import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarAprendizComponent } from './componentes/agregar-aprendiz/agregar-aprendiz.component';
import { EditarAprendizComponent } from './componentes/editar-aprendiz/editar-aprendiz.component';
import { ListarAprendizComponent } from './componentes/listar-aprendiz/listar-aprendiz.component';
import { AgregarProgramaComponent } from './componentes/agregar-programa/agregar-programa.component';
import { EditarProgramaComponent } from './componentes/editar-programa/editar-programa.component';
import { ListarProgramaComponent } from './componentes/listar-programa/listar-programa.component';
import { EditarDesercionComponent } from './componentes/editar-desercion/editar-desercion.component';
import { ListarDesercionComponent } from './componentes/listar-desercion/listar-desercion.component';
import { AgregarDesercionComponent } from './componentes/agregar-desercion/agregar-desercion.component';
import { VerDesercionComponent } from './componentes/ver-desercion/ver-desercion.component';


@NgModule({
  declarations: [
    AppComponent,
    AgregarAprendizComponent,
    EditarAprendizComponent,
    ListarAprendizComponent,
    AgregarProgramaComponent,
    EditarProgramaComponent,
    ListarProgramaComponent,
    AgregarDesercionComponent,
    EditarDesercionComponent,
    ListarDesercionComponent,
    VerDesercionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
