import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './componentes/app.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { ItemComponent } from './componentes/item/item.component';
import { ListContainerComponent } from './componentes/list-container/list-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    ItemComponent,
    ListContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
