// CODIGO NORMAL ES5
// setInterval(function () {
//     console.log('Hola ya paso 01 segundo ');
// }, 1000);

// TYPESCRIPT
// setInterval(() => {
//     console.log('Hola ya paso 01 segundo en funciones flecha ');
// }, 1000);



var frutas = [
    'Manzana',
    'Naraja',
    'Platano',
];

// CODIGO NORMAL ES5
var recorrer = frutas.map(function (fruta) {
    console.log('NORMAL: fruta = ', fruta);
});

// TYPESCRIPT

var recorrer = frutas.map(fruta => {
    console.log('FLECHA: fruta = ', fruta);
});