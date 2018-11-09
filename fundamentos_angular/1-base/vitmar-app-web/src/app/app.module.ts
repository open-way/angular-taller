/**
 * importación de módulos con objetos y utilidades comunes del framework y propios
/* importación del componente raíz, definido en esta misma carpeta
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovimientosModule } from './movimientos/movimientos.module';
import { SharedModule } from './shared/shared.module';
import { ProductosModule } from './productos/productos.module';

// decorador que define un módulo
@NgModule({
  declarations: [ // cosas declaradas en este módulo
    AppComponent,
  ],
  imports: [ // otros módulos que necesitamos para que este funcione
    BrowserModule,
    MovimientosModule,
    ProductosModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // componente raíz para el arranque
})
/**
 * Módulo raiz de la aplicación
 * Destinado a importar la funcionalidad implentadas en otros módulos
 */
export class AppModule {
  // los módulos son clases contendoras
  // habitualmente con poco o ningún código
}
