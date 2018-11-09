/**
 * importación de módulos con objetos y utilidades comunes del framework y propios
/* importación del componente raíz, definido en esta misma carpeta
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// decorador que define un módulo
@NgModule({
  declarations: [ // cosas declaradas en este módulo
    AppComponent
  ],
  imports: [ // otros módulos que necesitamos para que este funcione.
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // componente raíz para el arranque
})
/**
 * Módulo raiz de la aplicación
 * Destinado a importar la funcionalidad implentadas en otros módulos
 */
export class AppModule {
  // los módulos son clases contenedoras
  // habitualmente con poco o ningún código
}
