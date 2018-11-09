import { Component } from '@angular/core';

// Es una función que actúa como decorador
// Es la forma que tiene TypeScript de agregar Metadata al código
@Component({
  selector: 'vit-root', // determina el nombre que será conocido en html
  templateUrl: './app.component.html', // ruta relativa a la plantilla con la vista
  styleUrls: ['./app.component.scss'] // Aqui irán los estilos directamente, o las rutas hacia ficheros css...
})
export class AppComponent {
  // Habitualmente los componentes se llaman como el selector descartando el prefijo
  // El componente raíz es una excepción. Debería llamarse RootComponent
  // Respecto al selector... si no se dice nada su prefijo por defecto es app
  // Luego normalmente encontrarás el par 'app-root' AppComponent
  // Yo propongo cambiarle el nombre a vit-root para ser congruente con el resto
  // Propiedades del componente, visibles desde la plantilla
  title = 'vit';
}
