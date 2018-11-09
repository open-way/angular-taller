import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vit-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss'] // ruta para hojas de estilo propias
})
export class NuevoComponent implements OnInit {
  public mostrarFormulario = false;
  constructor() { }
  ngOnInit() {

  }

  onClickOcultar() {
    this.mostrarFormulario = false;
  }
}
