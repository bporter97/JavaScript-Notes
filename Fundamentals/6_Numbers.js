const num1 = 100;
const num2 = 50;

let val;

// Simple math with numbers

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
// MATH in javascrip is an object which means it include methods and attributes
val = Math.PI;
val = Math.E;
val = Math.round(2.4); // rounds the value in the parenthesis to the closest whole number
val = Math.ceil(2.4); // rounds the value to the next whole number
val = Math.floor(2.8); // rounds the value to the lowest whole number
val = Math.sqrt(64); // square root of a number
val = Math.abs(-3); // gives you the absolute number
val = Math.pow(8,  2); // raises the first number to the power of the second number
val = Math.min(2,33,4,1,55,6,3,-2); // finds the minimum value in an array of numbers
val = Math.max(2,33,4,1,55,6,3,-2); // finds the max
val = Math.random(); // generates a random number

val = Math.floor(Math.random() * 20 + 1);  // generates a random number between 1 and 20 and rounds it to the lowest whole number


console.log(val);
