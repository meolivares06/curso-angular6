import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from '../../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destino',
  templateUrl: './lista-destino.component.html',
  styleUrls: ['./lista-destino.component.scss']
})
export class ListaDestinoComponent implements OnInit {
  destinos: DestinoViaje[];

  constructor() {
    this.destinos = [];
  }

  ngOnInit() {}

  guardar(nombre: string, url: string): boolean {
    const modelNew = new DestinoViaje(nombre, url);
    this.destinos.push(modelNew);
    return false;
  }

  elegido(d: DestinoViaje) {
    this.destinos.forEach(x => {
      x.setSelected(false);
    });
    d.setSelected(true);
  }
}
