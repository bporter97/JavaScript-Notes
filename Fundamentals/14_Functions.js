// functions are blocks of code that can be defined and then called at a later time in the program
// or can be defined and called at the same time

//Declaring a function

function greet(){
  console.log('Hello'); //function actions are declared inside curly braces
}

greet(); //calls greet function, which in turns has the console print out "hello"

function greeting(){
  return 'hello'; // functions are typically used to return things, like in this case the function returns a string: "hello"
}

//to then print out what the function returned, you will need to call console.log
// and from there, input the fucntion into the parenthesis like so:

console.log(greeting());

//functions can take in parameters(or arguments) as well

function greeting2(firstName, lastName){
  return 'hello ' + firstName + " " + lastName;
}

console.log(greeting2('Willie', 'Nelson'));

// Function Expressions

// A function expression puts a function as a variable assignment
// Below a constant: 'square' is defined and a function is built with the parameter 'x'
const square  = function(x){
  return x*x;
};

// this console.log prints out the value of the square function when its called
// and takes in 8 as the parameter
console.log(square(8));

// Immidiatley Invokable function expressions = IIFES
// IIFES are functions that are delcared and ran at the same time;

// here are how they're constructed:
(function(){ // a variable can go into the parenthesis following 'fucntion'
  console.log('IIFE Ran...') // Here is the action the function will take
})(); // The last set of parenthesis are where data can be passed through into the variable

// Functions can be put inside of objects, thus turning them into methods

const todo = { //object is defined
  add: function(){ //function is defined
    console.log('Add todo...') // function action
  } // add in a comma after this curly brace to define the start of an additional function
  // this is where the additional function would go
}

// you can also define functions outside an object like so:

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add(); //calling the "add" method from object 'todo'
todo.delete();
