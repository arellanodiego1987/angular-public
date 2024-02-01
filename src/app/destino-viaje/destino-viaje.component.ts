import { Component, HostBinding, Input } from '@angular/core';
import { DestionViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrl: './destino-viaje.component.css'
})
export class DestinoViajeComponent {
  @Input() destino: DestionViaje;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor(){
    this.destino = new DestionViaje('','');
  }
}
