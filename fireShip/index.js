// redunant to assign a value to var while
// also explicitly defining the vars type
// do this
let lucky;
// or this
let luck;
// not this
let luk = 24;
let font;
// annotate arguments               v-- return value
const pow = (x, y) => Math.pow(x, y).toString();
// if no return value on a function
function sendSomeRequest(a) {
    // sends some kind of http request
}
// annotating arrays
const arr = [];
// Generics class
class Observable {
    constructor(value) {
        this.value = value;
    }
}
let x;
