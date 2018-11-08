module Tienda {
    export class Ropa {
        constructor(public titulo: string) {
            alert('Ropa: ' + titulo);
        }
    }

    export class Informatica {
        constructor(public titulo: string) {
            alert('Tienda de Informatica: ' + titulo);
        }
    }
}

import Info = Tienda.Informatica;
let cargarInformatica = new Info('Supertienda');
