// Crear una clase en typescrip
class Coche1 {
    public color: string;
    public modelo: string;
    public velocidad: number = 0;

    public getColor() {
        // Con 'this' accedemos a las propiedades de la clase
        return this.color;
    }

    public setColor(color: string) {
        this.color = color;
    }

    public getVelocidad(): number {
        return this.velocidad;
    }

    public acelerar() {
        this.velocidad++;
    }

    public frenar() {
        this.velocidad--;
    }
}

// Para utilizarlo debemos crear el objeto o instanciarlo
var coche = new Coche1();
// var coche_dos = new Coche();
// var coche_tres = new Coche();

coche.setColor('ROJO');
coche.acelerar();
console.log('La velocidad del coche es: ', coche.getVelocidad());
coche.acelerar();
console.log('La velocidad del coche es: ', coche.getVelocidad());
coche.frenar();
console.log('La velocidad del coche despues de prenar es: ', coche.getVelocidad());
