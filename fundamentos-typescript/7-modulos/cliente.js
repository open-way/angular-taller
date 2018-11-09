"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    function Cliente(name) {
        this.name = name || 'Cliente por default';
        this.compras.push('Zapato');
    }
    Cliente.prototype.agregarCarrito = function (compra) {
        this.compras.push(compra);
    };
    Cliente.prototype.getCompras = function () {
        return this.compras;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
