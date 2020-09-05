// redunant to assign a value to var while
// also explicitly defining the vars type

// do this
let lucky: 20;
// or this
let luck: number;
// not this
let luk: number = 24;

// creating a type
type Style = "bold" | "italic";
let font: Style;

// annotate arguments               v-- return value
const pow = (x: number, y: number): string => Math.pow(x, y).toString();

// if no return value on a function
function sendSomeRequest(a: object): void {
  // sends some kind of http request
}

// annotating arrays
const arr: number[] = [];
// optional arguments end with q
type MyList = [number?, string?, boolean?];

// Generics class
class Observable<T> {
  constructor(public value: T) {}
}

let x: Observable<number>;
