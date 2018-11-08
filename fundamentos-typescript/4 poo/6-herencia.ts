// Pequeño contrato, para definir que metodos o propiedades va a tener una clase.
class Programa {
    private nombre: string;
    private version: number;

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    getNombre() {
        return this.nombre;
    }

    setVersion(version: number) {
        this.version = version;
    }

    getVersion() {
        return this.version;
    }
}


class EditarVideo extends Programa {
    private timeLine: number;

    setTimeline(timeLine: number) {
        this.timeLine = timeLine;
    }

    getTimeline() {
        return this.timeLine;
    }

    getAllData(): string {
        return 'Nombre: ' + this.getNombre() + ', Version: ' + this.getVersion() + ', Timeline: ' + this.getTimeline();
    }
}

var miPrograma = new EditarVideo();

miPrograma.setNombre('Camtasia Studio')
miPrograma.setVersion(8)
miPrograma.setTimeline(1)

console.log(miPrograma.getAllData());
