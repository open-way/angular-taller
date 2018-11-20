var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Pequeño contrato, para definir que metodos o propiedades va a tener una clase.
var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    return Programa;
}());
var EditarVideo = /** @class */ (function (_super) {
    __extends(EditarVideo, _super);
    function EditarVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditarVideo.prototype.setTimeline = function (timeLine) {
        this.timeLine = timeLine;
    };
    EditarVideo.prototype.getTimeline = function () {
        return this.timeLine;
    };
    EditarVideo.prototype.getAllData = function () {
        return 'Nombre: ' + this.getNombre() + ', Version: ' + this.getVersion() + ', Timeline: ' + this.getTimeline();
    };
    return EditarVideo;
}(Programa));
var miPrograma = new EditarVideo();
miPrograma.setNombre('Camtasia Studio');
miPrograma.setVersion(8);
miPrograma.setTimeline(1);
console.log(miPrograma.getAllData());
// Lògica del formulario.
var programas = [];
function guardar() {
    var nombreDelInput = document.getElementById('nombre').value.toString();
    var programa = new EditarVideo();
    programa.setTimeline(15);
    programa.setVersion(15);
    programa.setNombre(nombreDelInput);
    programas.push(programa);
    var list = '';
    programas.forEach(function (programa) {
        list = list + '<li>' + programa.getNombre() + '</li>';
    });
    var listado = document.getElementById('listado');
    listado.innerHTML = list;
    // Borrar el value
    document.getElementById('nombre').value = '';
}
