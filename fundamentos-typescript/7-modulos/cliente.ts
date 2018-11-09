export class Cliente {
    private name: string;
    // private fecha_nac: string;
    private compras: Array<string>;

    constructor(name?: string) {
        this.name = name || 'Cliente por default';
        this.compras.push('Zapato');
    }

    public agregarCarrito(compra: string) {
        this.compras.push(compra);
    }

    public getCompras(): Array<string> {
        return this.compras;
    }
}
