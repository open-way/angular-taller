// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
function saludador(person: string) {
    return 'Hola, ' + person;
}

let usuario = 'Vitmar Aliaga Cruz'; // Consideremos que el let se cambio a var.
// let usuario = [1, 2, 3];
/**
 * Intentemos pasarle un Array de números en vez de 'Vitmar Aliaga' ||| Argument of type 'number[]' is not assignable to parameter of type 'string'.
 * No es posible.
 */

// VERSION 01
// document.getElementById('container').innerHTML = saludador(usuario)

// VERSION 02
const section = <HTMLElement>document.getElementById('container');
section.innerHTML = saludador(usuario);

// Escucha constantemente.
// tsc -w *.ts
