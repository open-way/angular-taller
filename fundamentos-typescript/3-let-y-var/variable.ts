// let varible limita su alcance al bloque donde se utiliza, local
// var variable Global

var a = 7;
var b = 12
const variable = '12' // Definir este tipo de variable.

if (a === 7) {
    // Solo tiene alcanze a este bloque
    let a = 4;

    // Cambiara el valor del inicio
    var b = 1

    console.log('DENTRO DEL IF', a, b)
}
console.log('FUERA DEL IF', a, b);




// FUNCIONES Y TIPADO
function devuelveNumero(num: number): string {
    return 'Número devuelto: ' + num;
}

function devuleveString(texto: string): number {
    if (texto = '45') {
        return 45
    } else {
        return 0;
    }
}

alert(devuelveNumero(15));
alert(devuleveString('45'));
