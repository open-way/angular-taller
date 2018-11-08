// Pequeño contrato, para definir que metodos o propiedades va a tener una clase.
interface CocheBase {
    getModelo(): string;
    getVelocidad(): number;
}

class Coche implements CocheBase {
    getModelo(): string {
        return '';
    }
    getVelocidad(): number {
        return 2;
    }
}