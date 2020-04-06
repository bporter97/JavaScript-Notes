// There are primitive Data Types and Reference Data Types in Javascript.
// Primitive Data types, data is stored directly in the location that the variable accesses.
// Reference Data types: Data is Accessed by references; there is a pointer that points to a location in memory.
// Primitive Data types include: Strings, numbers, booleans, null, undefined and symbols.
// Reference Data Types include: Arrays, object literals, functions and dates.
// Types are associated with values, not variables, and the same variable can hold multiple Types.
// Javascript is dynamically typed.

// Strings
const name = 'John Doe';
console.log(typeof name); //typeof: Allows you to see the type of data that is stored in a variable

//numbers
const age = 32;

//Boolean
const isTrue = true;

//null
const movie = null;

//undefined
let test;

//symbols
const sym = Symbol();

// Getting into Reference Types

// Arrays
const hobbies = ['movies', 'music'];

// Object Literal
const address = {
  city: 'Austin', state: 'TX'
}

const today = new Date();

console.log(today);
console.log(typeof today);

// !DataType Conversion!

let val;

// NUMBERS TO STRINGS
val = String(5); // to convert items to string, you need to put "String()" with the number in the parenthesis
val = String(4+4); // Expressions can also be converted as well

//Bool to string
val = String(true);

// Date to String
val = String(new Date());

//Array to String
val = String([1,2,3,4]);

// "toString()""
val = (5).toString(); // functions the same as String()

// STRINGS TO NUMBERS

val = '5';

//output
console.log(val);
console.log(typeof val);
console.log(val.length);
