// Crear una clase en typescrip
class Coche {
    public color: string;
    public modelo: string;
    public velocidad: number;

    public getColor() {
        // Con 'this' accedemos a las propiedades de la clase
        return this.color;
    }

    public setColor(color: string) {
        this.color = color;
    }
}

// Para utilizarlo debemos crear el objeto o instanciarlo
var coche = new Coche();
var coche_dos = new Coche();
var coche_tres = new Coche();

coche.setColor('ROJO');
coche_dos.setColor('VERDE');
coche_tres.setColor('AZUL');

console.log('El color del coche es: ', coche.getColor());
console.log('El color del coche dos es: ', coche_dos.getColor());
console.log('El color del coche tres es: ', coche_tres.getColor());
