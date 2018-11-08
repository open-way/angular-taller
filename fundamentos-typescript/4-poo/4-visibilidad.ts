// Evidentemente la utilidad de los getters y setters 
// es normalmente para cuando las propiedades son privadas 
// y no son accesibles desde fuera de la clase. Recuerda que estamos 
// haciendo ejemplos simples para comprender a grandes 
// rasgos como funcionan las bases de TypeScript y la POO.

class Coche3 {
    private color: string;
    private modelo: string;
    private velocidad: number;

    constructor(modelo: any = null) {
        if (modelo == null) {
            this.modelo = 'BMV Generico';
        } else {
            this.modelo = modelo;
        }
        this.velocidad = 0;
        this.color = 'Blanco';
    }

    public getModelo() {
        return this.modelo;
    }

    public setModelo(modelo: string) {
        this.modelo = modelo;
    }

}
var cochesito = new Coche3();
console.log('La velocidad del coche es: ', cochesito.getModelo());
var cochesito_dos = new Coche3('Gran QP');
console.log('La velocidad del coche es: ', cochesito_dos.getModelo());
