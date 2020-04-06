// If statements are used to evaluate conditions and perform functions if those conditions are/aren't statements

//Syntax is as follows

// if(something){
//   do something
// } else {
//   do something else
// }


const id = 100;

//Equal // TODO:
if(id == 101){
  console.log('right');
} else {
  console.log('wrong');
}

// Not Equal
if(id != 101){
  console.log('right');
} else {
  console.log('wrong');
}

// most of the time you want to test if the type and value are Equal
//This can be done with 3 equal signs, as followed:

if(id === 100){ //here we are testing if id is equal to the 'number' 100
  console.log('right'); // if we were to change the const value to "'100'" then we would get 'wrong' in console.log
} else {
  console.log('wrong');
}

// Same goes for 'not equal to ' value and type: (!==)



const num = 100;
if(num){
  console.log(`The number is ${num}`);
} else {
  console.log('No number');
}

// Greater than/less than
// > <
// Greater than or equal to or less than or equal to:
// >= <=

// test other conditions by using else if
const rgb = "green";
if(rgb === 'red'){
  console.log('Color is red');
} else if(rgb === 'blue'){
  console.log("Color is blue");
} else {
  console.log('Color is not red or blue, therefore it is green')
}

// Logical operators

const name = "Mick Jagger";
const age = 76;

if(age > 0 && age <12){ // using the && operator is equilvalent to saying "and"
  console.log(`You're not ${name}, you're an imposter!`);
} else if(age >= 13 && age <= 19){
  console.log(`Nice try buddy, you're too young to be ${name}, he's old as hell`);
} else if(age === 76){
  console.log("Welcome to the stage sir.");
} else{
  console.log(`I don't know, you don't really look like ${name}`);
}

// the && test to see if both statements are true. If you only want to test one, use '||' which stands for 'or'


// Ternary operators
console.log(id === 100 ? ' Correct' : "Incorrect") // basically a shorthand way of writing if else statements
// the if in this case is represented by the question mark and the else is represented by the semicolon.

// in javascript if statements, the curly braces are optional but are recommend for sake of clean code
