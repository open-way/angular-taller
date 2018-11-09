import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentasComponent } from './ventas.component';
import { VentaComponent } from './venta/venta.component';

const routes: Routes = [
  {
    path: '',
    component: VentasComponent,
    children: [
      {
        path: ':id',
        component: VentaComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
