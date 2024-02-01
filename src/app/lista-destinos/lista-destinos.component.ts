import { Component } from '@angular/core';
import { DestionViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrl: './lista-destinos.component.css'
})
export class ListaDestinosComponent {
  destinos: DestionViaje[];
  constructor(){
    this.destinos = []
  }
  guardar(nombre:string, url:string):boolean{
    this.destinos.push(new DestionViaje(nombre, url));
    return false;
  }
}
