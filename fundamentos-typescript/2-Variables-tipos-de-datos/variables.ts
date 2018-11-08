// VARIABLES
var nombre: string = 'Vitmar Aliaga';
var edad: number = 45;
var programador: boolean = true;
var lenguajes: Array<string> = ['Javascript', 'Java', 'Python'];
var cualquierTipoDeDato: any = true;

// ERROR
// nombre = 15;

const section = <HTMLElement>document.getElementById('container');
section.innerHTML = nombre + edad + programador + lenguajes;