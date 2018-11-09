import { NgModule } from '@angular/core';
import { NuevoComponent } from './nuevo/nuevo.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { SharedModule } from '../shared/shared.module';

/**
 * Una aplicación se compone de unos o más módulos funcionales
 */
@NgModule({
  imports: [
    SharedModule,
  ], // dependencia de otros módulos
  declarations: [
    NuevoComponent, // Este componente no se exporta.
    MovimientosComponent,
  ],
  exports: [
    MovimientosComponent,
  ] // Componentes que se exportan para se usados en otros módulos.
})
export class MovimientosModule { }
