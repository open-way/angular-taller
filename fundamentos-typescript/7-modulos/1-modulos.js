// import { Cliente } from './cliente';
var Tienda;
(function (Tienda) {
    var Ropa = /** @class */ (function () {
        function Ropa(titulo) {
            this.titulo = titulo;
            alert('Ropa: ' + titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = /** @class */ (function () {
        function Informatica(titulo) {
            this.titulo = titulo;
            alert('Tienda de Informatica: ' + titulo);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
var Info = Tienda.Informatica;
var cargarInformatica = new Info('Supertienda');
// let cliente = new Cliente();
// cliente.agregarCarrito('Pantalon');
// const compras = cliente.getCompras();
// console.log(compras);
