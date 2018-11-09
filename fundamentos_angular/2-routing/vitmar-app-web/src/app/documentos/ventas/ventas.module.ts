import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasComponent } from './ventas.component';
import { VentaComponent } from './venta/venta.component';

@NgModule({
  imports: [
    CommonModule,
    VentasRoutingModule
  ],
  declarations: [
    VentasComponent,
    VentaComponent,
  ],
})
export class VentasModule { }
