import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DestinoViaje} from '../../models/destino-viaje.model';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  @Output() clicked: EventEmitter<DestinoViaje>;
  constructor() {
    this.clicked = new EventEmitter<DestinoViaje>();
  }

  ngOnInit() {
  }

  sendClick() {
    this.clicked.emit(new DestinoViaje('anombre', 'image'));
  }
}
