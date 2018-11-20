// CASO 1
// Destruccion.
var recta = { x: 0, y: 10, width: 15, height: 20 };

// Tarea de destrucción
var { x, y, width, height } = recta;
console.log(x, y, width, height); // 0,10,15,20


// CASO 2
// structure
const obj = { "some property": "some value" };

// destructure
const { "some property": someProperty } = obj;
console.log(someProperty === "some value"); // true


// CASO 3
var { w, x, ...RESTO } = { w: 1, x: 2, y: 3, z: 4 };
console.log(w, x, RESTO); // 1, 2, {y:3,z:4}


// CASO 4
// Función de ejemplo
function goto(point2D: { x: number, y: number }) {
    console.log(point2D);

    // Imagina algún código que pueda romperse
    // si pasas en un objeto
    //con más artículos de los deseados
}
// Algún punto que obtienes de algún lado
const point3D = { x: 1, y: 2, z: 3 };
/** Un ingenioso uso del descanso para eliminar propiedades extra. */
const { z, ...point2D } = point3D;
goto(point2D);



// CASO 5
// Desestructuración de matrices con ignorantes.
var [x, , ...remaining] = [1, 2, 3, 4];
console.log(x, remaining); // 1, [3,4]