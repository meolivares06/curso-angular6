import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './componentes/app.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { DestinoViajeComponent } from './componentes/destino-viaje/destino-viaje.component';
import { ListaDestinoComponent } from './componentes/lista-destino/lista-destino.component';
import { InputFormComponent } from './componentes/input-form/input-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    DestinoViajeComponent,
    ListaDestinoComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
