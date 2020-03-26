// Arrays allow us to store multiple values in one variable

// Create Arrays

const numbers = [32, 25, 45, 4, 57, 69, 42];
const numbers2 = new Array(32, 95, 12, 62, 30); // uses constructor
const fruit = ['Apple', 'Grapes', 'Peach', 'Pineapple']; // Arrays can be strings
const mixedArray = []; // arrays can have multiple data types in them

let val;

// Get array length
val = numbers.length;
// Check if is array
//val = Array.isArrray(numbers);
// Get single value
val = numbers[3]; //number in brackets is index numbers
// Insert into Arrays
numbers[2] = 100 // replaces number at index position 2 with 100
// Find index of values
val = numbers.indexOf(57); // Shows the index position of a given value in an arrays

// Mutating arrays
numbers.push(250); // Adds on to end of arrays
numbers.unshift(120); // Adds on to the front of Arrays

// Take off from end
numbers.pop();
//Take off from front
numbers.shift();
// Splice values
numbers.splice(1, 1); // takes out characters from starting point and end point defined
//Reverse arrays
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

//Sorting arrays
val = fruit.sort();// sorts alphabetically and numerically
val = numbers.sort(); // numbers are sorted by first digit only, so 100 will be less than 20

// Use the "compare function"
val = numbers.sort(function(x, y){
  return x - y; //sorts by actual value of numbers
}); // to reverse order of numbers sorted, switch x and y

// Fined
function under50(num){
  return num < 50; // Sorts array starting with the first number under 50
}

val = numbers.find(under50);


console.log(numbers);
console.log(val);
