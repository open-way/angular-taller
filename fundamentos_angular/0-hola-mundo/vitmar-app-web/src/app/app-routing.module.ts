/** Módulos de enrutado de Angular2 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Array con las rutas de este módulo
const routes: Routes = [
  /*{
    path: '**', // para casos not-found
    redirectTo: '',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),  // configuración para un módulo raiz
  ],
  exports: [
    RouterModule, // se importará desde el módulo padre, el raíz
  ],
})
export class AppRoutingModule { }
