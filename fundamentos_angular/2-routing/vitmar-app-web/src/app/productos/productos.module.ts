import { NgModule } from '@angular/core';
import { ProductosComponent } from './productos/productos.component';
import { SharedModule } from '../shared/shared.module';
import { ListaComponent } from './lista/lista.component';
import { BuscadorComponent } from './buscador/buscador.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ProductosComponent,
    ListaComponent,
    BuscadorComponent,
  ],
  exports: [
    ProductosComponent,
  ],
})
export class ProductosModule { }
