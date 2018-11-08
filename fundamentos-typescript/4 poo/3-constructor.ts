// Crear una clase en typescrip
class Coche2 {
    public color: string;
    public modelo: string;
    public velocidad: number;

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
var coche = new Coche2();
console.log('La velocidad del coche es: ', coche.getModelo());
var coche_dos = new Coche2('Gran QP');
console.log('La velocidad del coche es: ', coche_dos.getModelo());
