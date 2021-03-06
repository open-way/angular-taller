function foo(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}
var args = [0, 1, 2];
foo.apply(null, args);
// CASO 1
function fooo(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}
var args = [0, 1, 2];
fooo.apply(void 0, args);
// CASO 2
var _a = [1, 2, 3, 4], x = _a[0], y = _a[1], remaining = _a.slice(2);
console.log(x, y, remaining); // 1,2,[3,4]
