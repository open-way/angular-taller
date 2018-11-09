import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovimientosComponent } from './movimientos/movimientos/movimientos.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'movimientos',
    component: MovimientosComponent,
  },
  {
    path: 'contacto', // TAREA
    loadChildren: './contacto/contacto.module#ContactoModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
