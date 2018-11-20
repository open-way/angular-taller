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


// Lògica del formulario.
var programas: Array<EditarVideo> = [];

function guardar() {
    var nombreDelInput = (<HTMLInputElement>document.getElementById('nombre')).value.toString();
    var programa = new EditarVideo();
    programa.setTimeline(15);
    programa.setVersion(15);
    programa.setNombre(nombreDelInput);

    programas.push(programa);

    var list = '';
    programas.forEach(programa => {
        list = list + '<li>' + programa.getNombre() + '</li>';
    });

    var listado = <HTMLElement>document.getElementById('listado');
    listado.innerHTML = list;

    // Borrar el value
    (<HTMLInputElement>document.getElementById('nombre')).value = '';
}
