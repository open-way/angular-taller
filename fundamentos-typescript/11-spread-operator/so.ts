function foo(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}
var args = [0, 1, 2];
foo.apply(null, args);



// CASO 1
function fooo(x?, y?, z?) {
    console.log(x);
    console.log(y);
    console.log(z);
}
var args = [0, 1, 2];
fooo(...args);

// CASO 2
var [x, y, ...remaining] = [1, 2, 3, 4];
console.log(x, y, remaining); // 1,2,[3,4]
