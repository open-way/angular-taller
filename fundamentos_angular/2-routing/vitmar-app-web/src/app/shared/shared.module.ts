import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * El módulo compartido se importa en todos los demás módulos
 * Con dos propósitos:
 *  - unificar las dependencias externas comunes
 *  - definir componentes y servicios reutilizables por la aplicación
 */
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ], // Módulos necesarios
    exports: [
        CommonModule,
        FormsModule,
    ],
})
export class SharedModule { }
