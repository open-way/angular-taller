// import { Cliente } from './cliente';
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


// let cliente = new Cliente();
// cliente.agregarCarrito('Pantalon');
// const compras = cliente.getCompras();
// console.log(compras);
