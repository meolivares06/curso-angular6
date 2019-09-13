import { Component, OnInit } from '@angular/core';
import {DestinoViaje} from '../../models/destino-viaje.model';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  destinos: DestinoViaje[] = [];
  constructor() {
    this.destinos = [
      new DestinoViaje('a', 'b'),
      new DestinoViaje('a', 'b'),
      new DestinoViaje('a', 'b')
    ];
  }

  ngOnInit() {
  }

  agregar(titulo: HTMLInputElement) {
    console.log(titulo.value);
  }

  seleccionar(destino: DestinoViaje) {
    console.log(destino);
    this.destinos.push(destino);
  }
}
