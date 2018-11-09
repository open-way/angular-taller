import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovimientosModule } from './movimientos/movimientos.module';
import { ProductosModule } from './productos/productos.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MovimientosModule,
    ProductosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
